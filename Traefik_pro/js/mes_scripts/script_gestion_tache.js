/********** ========FONCTIONS POUR LA PAGE GESTION DES TACHES DEBUT ========**********/

//Afficher le message de resultat de recherche 

function replace(message)
{
   $('#change_searchmessage').replaceWith('<div class="col-sm-10 col-sm-offset-1 alertSuccess" id="change_searchmessage"><div class="successInscription"> <br><h4 class="text-center">'+message+'</h4><div class="row"><button class="btn btnColor pull-right" id="closeError" onclick="close_element()">Fermer</button><br></div></div></div>'
                );
}

//Afficher le message de suppression de SMS 

function replace_delmessge(message)
{
   $('#change_searchmessage').replaceWith(message);
}

 //Fonction pour rechercher un bulk SMS 

//deb
function search_message(message_search="", number)
{
    //Number designe le type d'operations : 1= recherche, 2= suppression
    $('#error').remove();

	   var form_data = new FormData();  

	   var    date_fin             =  document.getElementById('date_fin').value;
     var    id_compte            =  document.getElementById('id_compte').value;
     var    emetteur             =  document.getElementById('emetteur').value;
     var    message              =  document.getElementById('message').value;
     var    date_debut           =  document.getElementById('date_debut').value;

     form_data.append('date_fin', date_fin);
     form_data.append('id_compte', id_compte);
     form_data.append('emetteur', emetteur);
     form_data.append('message', message);
     form_data.append('date_debut', date_debut);

      $.ajax({
        type: 'POST',
        url: 'api/api_gestion_tache.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('#treat_form').html("<span id='error'>"+response+"</span>");
         if(number==1)
         {
            replace(message_search);  

         }
         else if(number==2)
         {
            replace_delmessge(message_search);
         }
                    
       }
      });

}
//Fin


/*================================= MIS A JOUR DU TABLEAU DE RECHERCHE DE SMS DEBUT============================================*/

//Mettre à jour  le tableau de recherche de sms après suppression
//deb
function update_tabsearch_sms()
{
   $('#search_sms').remove();  
   $('.tabsearch_sms').remove();   //suppression l'ancien contenu en cas d'une nouvelle MAJ
      
      var   date_fin            =  document.getElementById('date_fin').value;
     var    id_compte            =  document.getElementById('id_compte').value;
     var    emetteur             =  document.getElementById('emetteur').value;
     var    message              =  document.getElementById('message').value;
     var    date_debut           =  document.getElementById('date_debut').value;

      $.get('Forms/update_tabsearch_message.php?id_compte='+id_compte + '&emetteur='+emetteur + '&date_debut='+date_debut + '&date_fin='+date_fin + '&message='+message,function(data){
  
       $('.tabsearch_sms').html("<span id='search_sms'>"+data+"</span>");

   });
}
//fin

/*=================================  MIS A JOUR DU TABLEAU DE RECHERCHE DE SMS DEBUT FIN ============================================*/

/*=================================  SUPPRIMER UNE LIGNE DANS GESTION DES TAACHES SMS DEBUT============================================*/

//Supprimer un sms
function delete_tachesms(id_compte,id_table,id_sms ) { 

    $('#error').remove();
    var form_data = new FormData(); 
     form_data.append('id_table', id_table);
     form_data.append('id_element', id_compte);
     form_data.append('id_sms', id_sms);
    

     $.ajax({
        type: 'POST',
        url: 'api/api_remove.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         search_message(response,2);
         //$('#delete_sms_messge').html("<span id='error'>"+response+"</span>");  
       }
      });

  //document.getElementById('delete_sms_messge').innerHTML = sData;
  //update_tabsearch_sms();  
  
}
//fin

/*=================================  SUPPRIMER UNE LIGNE DANS GESTION DES TAACHES SMS FIN============================================*/

/********** ========FONCTIONS POUR LA PAGE GESTION DES TACHES FIN ========**********/