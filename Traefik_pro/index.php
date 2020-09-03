<?php  
 header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods POST, GET, OPTIONS, DELETE, PUT");
  header("Access-Control-Max-Age 1000");
  header("Access-Control-Allow-Headers x-requested-with, Content-Type, origin, authorization, accept, client-security-token");


  
?>
<!DOCTYPE html>
<html lang="en">
  
<?php

  $title_head="Rocketchat - Connexion";
   
   include('head.php'); 
;?>
<!--script type="text/javascript" src="code.js"-->


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"></script>

<script type="text/javascript" src="chatbot.js"></script>

<body>
        
  
       
              <?php
                   //>Check connexion informations
                 include ('treat/api_connexion.php');
              ?>
          
                
                 <center><img src="traefik.png" class="img-circle" ></center>
                 <div class="col-sm-4 col-sm-offset-4">
                      <form class="formsso" method="post">
                         <br><br>
                         <input type="email" name="email" class="form-control input_fond" placeholder="email" type="required"><br>
                          <input type="password" name="password" class="form-control input_fond" placeholder="pasword" type="required"><br>
                            <br>
                            <center>
                                      <button class="btn btnBluelog" type="submit" name="sendConnexion">Log in</button>

                            </center>

                      </form>
                 </div>

        
  
      
      </body>
</html>