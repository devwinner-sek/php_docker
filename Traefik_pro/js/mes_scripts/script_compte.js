/********** ========FONCTIONS POUR LA PAGE ESPACE ADMIN DEBUT ========**********/

//Mettre à jour  le tableau des comptes utilisateurs 
function update_listcompte_user()
{
   $('#contenu_compte_user').remove();  
   $('#list_users').remove();   //suppression l'ancien contenu en cas d'une nouvelle MAJ

      var id_compte_user= document.getElementById('parent_id').value;
      var id_compte_edit= document.getElementById('id_edit').value;


      $.get('Forms/update_tab_compteusers.php?id_compte_user='+id_compte_user+ '&id_compte_edit='+id_compte_edit,function(data){
  
       $('.list_users').html("<span id='contenu_compte_user'>"+data+"</span>");

   });
}


//Fonction pour créditer le compte d'un utilisateur
function crediter_compte(id_compte)
{
    $('#error').remove();
  
   var form_data = new FormData();  

   //Recuperation des donnees $("input[name=nameGoesHere]").val()  $("input[name="solde_one"]").val;;
      var solde_one= document.getElementsByName("solde_one")[0].value;
      console.log(solde_one);

      form_data.append('solde_one', solde_one);
      form_data.append('id_compte', id_compte);



      $.ajax({
        type: 'POST',
        url: 'api/api_crediter_compte.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('.show_message_credit').html("<span id='error'>"+response+"</span>");        
       }
      });
}


/*===============================================================================================*/

//Traiter un formulaire de creation de compte  
//Deb
function treat_compte_user() {  

     requestval_compte_user(readDataval_compteuser);
  }


function requestval_compte_user(callback) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);

    //Recupertion des donnees
    
   var    parent_id              =   document.getElementById('parent_id').value;
   var    id_edit                =   document.getElementById('id_edit').value;
   var    nom_user               =  document.getElementById('nom_user').value;
   var    passwd                 =  document.getElementById('passwd').value;
   var    name                   =  document.getElementById('name').value;
   var    prenom                 =  document.getElementById('prenom').value;
   var    number_cni             =  document.getElementById('number_cni').value;
   var    type_compte            =  document.getElementById('type_compte').value;
   var    email                  =  document.getElementById('email').value;
   var    phone_number1          =  document.getElementById('phone_number1').value;
   var    phone_number2          =  document.getElementById('phone_number2').value;
   var    nom_entreprise         =  document.getElementById('nom_entreprise').value;

    
    xhr.open("GET",'api/api_compte.php?id_edit='+id_edit+'&nom_user='+nom_user + '&parent_id='+parent_id + '&passwd='+passwd +'&name='+name+'&prenom='+prenom +'&number_cni='+number_cni +'&type_compte='+type_compte+'&email='+email+'&phone_number1='+phone_number1+'&phone_number2='+phone_number2 +'&nom_entreprise='+nom_entreprise, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
    
}

function readDataval_compteuser(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
    //alert(' Nom user : '+entreprise+' mobile_number : '+email);
    update_listcompte_user();

}
//fin

/*===============================================================================================*/

//Editer un compte user 
//deb
function treat_edit(id) {  

     requestval_edit(readDataval_edit,id);
  }


function requestval_edit(callback,id) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);

  
    xhr.open("GET",'Forms/form_admin.php?id_compte_edit='+id, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
}
 
function readDataval_edit(sData) {
     document.getElementById('page').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
     // valid('nouveau_compte');

}
//fin

/*===============================================================================================*/

//Afficher les erreurs, messages de succès provenant de PHP

function readDataval_form(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
/********** ========FONCTIONS POUR LA PAGE ESPACE ADMIN FIN ========**********/
