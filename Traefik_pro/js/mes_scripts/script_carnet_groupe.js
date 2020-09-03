/********** ========FONCTIONS POUR LA PAGE CARNET D'ADRESSE DEBUT ========**********/

//Récupérer les groupes crées par l'utilisateur 
function update_list_group()
{
   $('#liste_groupe').remove();  
   $('#groupe_user').remove();   //suppression l'ancien contenu en cas d'une nouvelle MAJ

      var id_compte_user= document.getElementById('id_compte_user').value;
  
      $.get('Forms/update_liste_groupe.php?id_compte_user='+id_compte_user,function(data){
  
       $('.groupe_user').html("<span id='liste_groupe'>"+data+"</span>");

   });

}

/*===============================================================================================*/

//Créer un groupe et y ajouter des contacts 

function treat_carnet_groupe(val) {  

     requestval_groupe_carnet(readDataval_carnet_groupe,val);
  }

function requestval_groupe_carnet(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var    add_group_op             = val;
    var    id_compte_user           =  document.getElementById('id_compte_user').value;

    if(add_group_op==1)
    {
       //création d'un groupe 

      //Recuperation des donnees
         var    nom_groupe               =  document.getElementById('nom_groupe').value;

        xhr.open("GET",'api/api_carnet_groupe.php?add_group_op='+add_group_op+'&nom_groupe='+nom_groupe +'&id_compte_user='+id_compte_user  +'&selected_nomgroupe='+selected_nomgroupe, true);

    }
    else if(add_group_op==2)
    {

      //Ajout des contacts à un groupe 

      //Récupération des données
         var    nom_contact               =  document.getElementById('nom_contact').value;
         var    numero_contact1           =  document.getElementById('numero_contact1').value;
         var    numero_contact2           =  document.getElementById('numero_contact2').value;
         var    select                    =  document.getElementById('nom_groupe_select');
         var    choice                    = select.selectedIndex;
         var    selected_nomgroupe        = select.options[choice].value; 

         xhr.open("GET",'api/api_carnet_groupe.php?add_group_op='+add_group_op+'&nom_contact='+nom_contact + '&numero_contact1='+numero_contact1 +'&numero_contact2='+numero_contact2 +'&nom_groupe='+nom_groupe +'&id_compte_user='+id_compte_user  +'&selected_nomgroupe='+selected_nomgroupe, true);

    }

      
    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded") ;
    //alert('email='+email + '&password='+password +'&entreprise='+entreprise);
    xhr.send(null) ;
}

function readDataval_carnet_groupe(sData) {
      document.getElementById('treat_form').innerHTML = sData;
      update_list_group();
      
}
 
/*===============================================================================================*/

//Réinitialiser le champ nom groupe 
 function reset_nomgroupe()
 {
     $(".input_nomgroupe").val("");

 }

 //Afficher les erreurs, messages de succès provenant de PHP

function readDataval_form(sData) {
     document.getElementById('treat_form').innerHTML = sData;
    // document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}

/********** ========FONCTIONS POUR LA PAGE CARNET D'ADRESSE FIN ========**********/
