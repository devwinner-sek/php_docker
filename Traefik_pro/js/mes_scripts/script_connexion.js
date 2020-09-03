/********** ========FONCTIONS POUR LA PAGE CONNEXION DEBUT ========**********/
//Deb
function treat_connexion(val) {  

     requestval_connexion(readDataval_connexion,val);
  }

function requestval_connexion(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;

    //Recuperation des donnees a php

   var email            =  document.getElementById('email').value;
   var  passwd          =  document.getElementById('passwd').value;
    
    xhr.open("POST",'api/api_connexion.php?email='+email + '&passwd='+passwd, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
}
 
function readDataval_connexion(sData) {
     document.getElementById('treat_connexion').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
//fin

/*===============================================================================================*/
//Changer le mot de passe de connexion

//Deb
function treat_forget_password(val) {  

     requestval_forget_password(readDataval_forget_password,val);
  }

function requestval_forget_password(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;

    //Recuperation des donnees a php

   var nom_user               =  document.getElementById('nom_user').value;
   var  email                 =  document.getElementById('email').value;
   var  number_phone          =  document.getElementById('number_phone').value;

    
    xhr.open("POST",'api/api_forget_password.php?nom_user='+nom_user + '&email='+email+'&number_phone='+number_phone, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
}
 
function readDataval_forget_password(sData) {
     document.getElementById('treat_forget').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
//fin


/********** ========FONCTIONS POUR LA PAGE CONNEXION FIN ========**********/
