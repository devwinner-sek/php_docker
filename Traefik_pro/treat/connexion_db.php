<?php
	/*Connexion à la base de données db_nticsms*/

   $hostName='localhost';
   $dbName='sso_diag';
   $userName='root';
   $password='';
   
	try
	{
		$db=new PDO('mysql:host='.$hostName.';dbname='.$dbName.'',$userName,$password);

		$db->query("SET NAMES 'utf8'");	
		//define('dbName', $db);
	}
	
	catch(Exception $e)
	{
		die('erreur: '.$e->getMessage());
	}
	
?>