
<!DOCTYPE html>
<html lang="en">
  
<?php

  $title_head="Rocketchat - Connexion";
   
   include('../head.php'); 
;?>
<!--script type="text/javascript" src="code.js"-->





<body>
      
        <?php
            include('../menu.php');?>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <div class="item active">
                    <img src="img/slide/divider2.jpg" alt="Los Angeles">
                  </div>

                  <div class="item">
                    <img src="img/slide/divider3.jpg" alt="Chicago">
                  </div>

                  <div class="item">
                    <img src="img/slide/divider6.jpg" alt="New York">
                  </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
         </div>
             
        
            
      
      </body>
</html>