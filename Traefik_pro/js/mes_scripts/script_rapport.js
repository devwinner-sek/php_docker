/********** ========FONCTIONS POUR LA PAGE RAPPORT DEBUT ========**********/

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
function show_rapport_credit()
{
    //Number designe le type d'operations : 1= recherche, 2= suppression
    $('#error').remove();

	   var form_data = new FormData();  

	   var    date_fin             =  document.getElementById('date_fin').value;
       var    id_compte            =  document.getElementById('id_compte').value;
       var    date_debut           =  document.getElementById('date_debut').value;

     form_data.append('date_fin', date_fin);
     form_data.append('id_compte', id_compte);
     form_data.append('date_debut', date_debut);

      $.ajax({
        type: 'POST',
        url: 'api/api_detail_credit.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('#treat_form').html("<span id='error'>"+response+"</span>");
                  
       }
      });

}
//Fin

/********** ========FONCTIONS POUR LA PAGE RAPPORT FIN ========**********/