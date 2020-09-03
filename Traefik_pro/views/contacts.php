<!DOCTYPE html>
<html lang="en">
  
<?php

  $title_head="Rocketchat - Connexion";
   
   include('../head.php'); 
;?>
<!--script type="text/javascript" src="code.js"-->


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"></script>



<body>
	<?php
	            include('../menu.php');?>
	<div class="container_center">
			
	      
	        <div class="col-sm-4 col-sm-offset-4">
	        	      <button class="btn btnBluelog">Contactez-nous </button><br>
                      <form class="formsso" method="post">
                         <br><br>
                         <input type="email" name="email" class="form-control input_fond" placeholder="email" type="required"><br>
                          <input type="text" name="prenom" class="form-control input_fond" placeholder="prénoms" type="required"><br>
                          <textarea class="form-control">Message </textarea>
                            <br>
                            <center>
                                      <button class="btn btnBluelog" type="submit" name="sendConnexion">Enrégistrer</button>

                            </center>

                      </form>
                 </div>
	</div>
	
             
          
                

            
      
      </body>
</html>