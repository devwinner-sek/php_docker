
//Sauvegarder un message 
function save_message(val) {  
  
  $('#error').remove();

   var form_data = new FormData();  
   var    id_compte                  =  document.getElementById('id_compte').value;
   var    message                    =  document.getElementById('message').value;
   
   form_data.append('message', message);
   form_data.append('id_compte', id_compte);

   $.ajax({
        type: 'POST',
        url: 'api/api_save_message.php',
        contentType: false,
        processData: false,
        data: form_data,
        success:function(response) {
         $('.treat_form').html("<span id='error'>"+response+"</span>");        }
      });


}