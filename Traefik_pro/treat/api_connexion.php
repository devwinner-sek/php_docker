<?php
   session_start();
  //Connexion à la bd
  
 

  $erreurs      = array(); //array pour les erreurs


  if(isset($_POST['sendConnexion']))
  {
      //Récupération des valeurs par POST 

      $email=htmlspecialchars($_POST['email']);
      $passwd=htmlspecialchars($_POST['password']);
      if(!empty($passwd) && !empty($email))
      {
         header('Location: views/home.php');
      }
      else
      {
          echo "  <div class='jumbotron'>  

                      <h2> Tous les champs nes ont pas remplis </h2>
                    </div>";
                 
      }

      
  }

  
;?>