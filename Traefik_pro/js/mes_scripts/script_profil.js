/********** ========FONCTIONS POUR LA PAGE PROFIL DEBUT ========**********/

//Traiter le formulaire de profil utilsateur 

//Deb
function treat_profil(val) {  

     requestval_treat(readDataval_profil,val);
  }

function requestval_treat(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;

    //Recuperation des donnees a php
    var id_compte_user    =  document.getElementById('id_compte_user').value;

   var email              =  document.getElementById('email').value;
   var password           =  document.getElementById('password').value;
   var  entreprise        =  document.getElementById('entreprise').value;
   var personne_contact   =  document.getElementById('personne_contact').value;
   var number_mobile      =  document.getElementById('mobile_number').value;
   var nom_user           =  document.getElementById('nom_user').value;


    
    xhr.open("GET",'api/api_profil.php?email='+email + '&password='+password +'&entreprise='+entreprise+'&id_compte_user='+id_compte_user  +'&nom_user='+nom_user +'&personne_contact='+personne_contact  +'&number_mobile='+number_mobile, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
    //alert(' Nom user : '+nom_user+' mobile_number : '+number_mobile);

}

function readDataval_profil(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
    //alert(' Nom user : '+entreprise+' mobile_number : '+email);

}
//fin

/*===============================================================================================*/


/*===============================================================================================*/

//Changer le mot de passe de l'utilisateur 

function treat_change_password(val) {  

     requestval_change_password(readDataval_change_password,val);
  }


function requestval_change_password(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;

    //Recupertion des donnees
   var    id_compte_user             =  document.getElementById('id_compte_user').value;
   var    old_password               =  document.getElementById('old_password').value;
   var    new_password               =  document.getElementById('new_password').value;
   var    confirm_new_password       =  document.getElementById('confirm_new_password').value;
  
  

    xhr.open("GET",'api/api_change_password.php?old_password='+old_password + '&new_password='+new_password +'&confirm_new_password='+confirm_new_password +'&id_compte_user='+id_compte_user, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
}
 
function readDataval_change_password(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
//fin


/*===============================================================================================*/

//Afficher les erreurs, messages de succès provenant de PHP

function readDataval_form(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}

/********** ========FONCTIONS POUR LA PAGE PROFIL FIN ========**********/