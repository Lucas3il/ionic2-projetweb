<?php

header( 'content-type: text/html; charset=utf-8' );

include 'connexionBase.php';

// class Etablissement {
//     var $NomEtab;   
//     var $AdrEtab;
//     var $TelEtab;
// }

// $etab=new Etablissement();

$NomEtab = $_GET["NomEtab"];
$AdrEtab = $_GET["AdrEtab"];
$TelEtab = $_GET["TelEtab"];

echo $NomEtab.$AdrEtab.$TelEtab;

//$json = json_encode((array)$etab );
// echo $NomEtab;
// echo $json;
$conn = connexion();
$stmt = $conn->prepare("INSERT INTO Etablissement (Nom_Etablissement, Adresse_Etablissement, Tel_Etablissement) VALUES ('".$NomEtab."','".$AdrEtab."','".$TelEtab."')");
$stmt->execute();


?>