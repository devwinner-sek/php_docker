
//Réinitialiser un formulaire 
function reset_form(id_form)
{
  $('#'+id_form)[0].reset();
}

function testons(valeur)
{
    valid(valeur);
}
//Afficher les erreurs, messages de succès provenant de PHP

function readDataval_form(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}


//Fonction pour fermer le bouton close 
function close_element()
{
          $('.alertError').slideUp();
          $('.alertSuccess').slideUp();
          $('.alertErrorlog').slideUp();
         

}

function close_search()
{
          $('.alertSearch').slideUp();

}



//Supprimer un element d'une table 
//deb 
function delete_element(id_compte,id_table, valeur) {  
    
    $('#error').remove();
    var form_data = new FormData(); 
     form_data.append('id_table', id_table);
     form_data.append('id_element', id_compte);

     $.ajax({
        type: 'POST',
        url: 'api/api_remove.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('#treat_form').html("<span id='error'>"+response+"</span>"); 
         valid(valeur); 
           
       }
      });
      

}

//fin


//Deb
function treat_search_categori() {  

     requestval_categori(readDataval_form);
  }

function requestval_categori(callback) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);

    //Recupertion des donnees
    
   var    message              =  document.getElementById('message').value;
   var    emetteur             =  document.getElementById('emetteur').value;
   var    date_debut           =  document.getElementById('date_debut').value;
   var    date_fin           =  document.getElementById('date_fin').value;


    
    xhr.open("GET",'api/api_recherche_categorie.php?date_fin='+date_fin+'&message='+message+'&emetteur='+emetteur +'&date_debut='+date_debut, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
    
}


 
//fin
