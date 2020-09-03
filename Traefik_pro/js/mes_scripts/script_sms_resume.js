/********** ========FONCTIONS POUR LA PAGE SMS RESUME  ========*****/

function treat_sms_resume() {

   var form_data = new FormData();  

   //Recuperation des donnees 

   
   var    id_compte                   =  document.getElementById('id_compte').value;
   var    pays_select                 =  document.getElementById('pays_select').value; 
   var    select_operateur            =  document.getElementById('select_operateur').value;
   var    date_fin                    =  document.getElementById('date_fin').value;
   var    date_debut                  =  document.getElementById('date_debut').value;
  

    form_data.append('date_fin', date_fin);
    form_data.append('id_compte', id_compte);
    form_data.append('date_fin', date_fin);
    form_data.append('pays_select', pays_select);
    form_data.append('select_operateur', select_operateur);
        

      $.ajax({
        type: 'POST',
        url: 'api/api_sms_resume.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('.treat_form').html("<span id='error'>"+response+"</span>");        }
      });
    
  }

//fin