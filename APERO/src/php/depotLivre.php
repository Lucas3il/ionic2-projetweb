<?php

    include 'connexionBase.php';

    $connexion=connexion();

    $famille=json_decode($_GET["famille"]);
    $listeLivre=json_decode($_GET["listeLivre"]);

    


    for ($i = 0; $i < count($listeLivre); ++$i){
        $stmt = $connexion->prepare("INSERT INTO Exemplaire (Livre_Exemplaire, Etat_Exemplaire, AnneeMiseADispo_Exemplaire) VALUES ('".$listeLivre[$i]->Livre_Exemplaire."', '".$listeLivre[$i]->Etat_Exemplaire."', '".$listeLivre[$i]->AnneeMiseADispo_Exemplaire."');");
        if($stmt->execute()){
            echo "réussi ";
        }
        else {
            echo "echec".$stmt->error;
        }
        $stmt = $connexion->prepare("insert into Depot VALUES (".$famille->ID.", LAST_INSERT_ID());");
        $stmt->execute();
    }
    //$json = json_encode($listeLivre->ISBN_Livre);
    echo "echo : ".$listeLivre[0]->Livre_Exemplaire.", ".$listeLivre[0]->Etat_Exemplaire.", ".$listeLivre[0]->AnneeMiseADispo_Exemplaire." fam : ".(string)$famille->ID;

?>