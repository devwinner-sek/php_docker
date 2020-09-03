/********** ========FONCTIONS POUR LA PAGE ENVOI SMS DEBUT ========**********/
//deb
var fileobj;

  function treat_sms(num_form) {

    /*le num_form designe le numéro du formulaire 
         1 pour simple sms (saisi de numéro) 
         2 pour bulk sms  (upload de fichier)
         3 pour groupe sms (choix d'un groupe )*/
         
    if(num_form==2)
    {
      //bulk sms 
        fileobj = document.getElementById('file_bulk').files[0];
    }

    ajax_file_upload(fileobj,num_form);
    
  }
 
  function ajax_file_upload(file_obj,num_form) {
    $('#error').remove();

   var form_data = new FormData();  

   //Recuperation des donnees 

   var    heure_livraison      =  document.getElementById('heure_livraison').value;
   var    id_compte            =  document.getElementById('id_compte').value;
   var    emetteur             =  document.getElementById('emetteur').value;
   var    message              =  document.getElementById('message').value;
   var    date_send            =  document.getElementById('date_send').value;
   var    messagegrade         =  document.getElementById('messagegrade').value;
  
   var numero   ="";
   if(num_form==1 || num_form==3)
   {
      //simple sms numero et groupe sms 
        var    numero      =  document.getElementById('numero').value;
       form_data.append('numero', numero);

       //Groupe sms 
       if(num_form==3)
       {
          var    groupe_exist      =  document.getElementById('groupe_exist').value;
          var    idgroup           =  document.getElementById('idgroup').value;
          
          form_data.append('idgroup', idgroup);
          form_data.append('groupe_exist', groupe_exist);
       }

   }

    if(num_form==2)
    {
        //Bulk sms file 
        form_data.append('file', file_obj);
        console.log(file_obj);

     }                
        form_data.append('heure_livraison', heure_livraison);
        form_data.append('id_compte', id_compte);
        form_data.append('emetteur', emetteur);
        form_data.append('emetteur', emetteur);
        form_data.append('messagegrade', messagegrade);
        form_data.append('message', message);
        form_data.append('date_send', date_send);
        form_data.append('num_form', num_form);

      $.ajax({
        type: 'POST',
        url: 'api/api_sms.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('.treat_form').html("<span id='error'>"+response+"</span>");        }
      });
    
  }

//fin

/*===============================================================================================*/

//Supprimer un sms
function delete_sms(id_compte,id_table, valeur) {  

     requestval_delete_sms(readDataval_delete_sms,id_compte,id_table);
     //Refresh de la page vers l'ancre nouveau_compte
     
  }

function requestval_delete_sms(callback,id_compte,id_table,valeur) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText,valeur);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);

    xhr.open("GET",'api/api_remove.php?id_element='+id_compte + '&id_table='+id_table, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;

}

function readDataval_delete_sms(sData) {
      document.getElementById('treat_form').innerHTML = sData;
      //valid(valeur);

}
//fin

/*===============================================================================================*/


//Afficher les erreurs, messages de succès provenant de PHP

function readDataval_form(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}

/*===============================================================================================*/
//Rediriger sur la page de création de groupe 

//deb
function redirect_groupepage()
{
   valid('Groupe');
}

//fin
  /*===============================================================================================*/
   
   //Récupérer les groupes sélectionner par l'utilisateur
//deb

   function recuver_groupselect()
   {
     var checkboxValues = [];
     var arraySeparator = [];
     var arrayIdgroup   = []; 
 
    $('input[type="checkbox"]:checked').each(function(index, elem) {
        checkboxValues.push($(elem).val());
        var separator = checkboxValues[index];
        arraySeparator = separator.split('#');
        //console.log(arraySeparator[0]);
        checkboxValues[index]=arraySeparator[0];
        arrayIdgroup.push(arraySeparator[1]);
    });   

      $('#numero').val(checkboxValues.join(', '));
      $('#idgroup').val(arrayIdgroup.join(', '));

   }

//fin

/********** ========FONCTIONS POUR LA PAGE ENVOI SMS FIN ========**********/