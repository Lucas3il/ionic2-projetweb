<?php
$dsn = 'mysql:dbname=leofazenqyapero;host=leofazenqyapero.mysql.db'; 
$user = 'leofazenqyapero'; 
$password = 'Apero12000'; 

$nom = $_POST["name"];
$prenom = $_POST["alterEgo"];

try  
{ 
  // Connect 
  $conn = new PDO($dsn, $user, $password);
}
catch (PDOException $e)
{    
    echo 'Connexion échouée : ' . $e->getMessage();
}
// Déconnect
$stmt = $conn->prepare("SELECT nom, prenom FROM test WHERE nom=".$nom." AND ".$prenom.";");
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if( ! $row)
{
    die('nothing found');
}
$dbh = null;

?>
