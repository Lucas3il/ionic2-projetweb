<?php

    $famille=$_GET["famille"];
    $listeLivre=$_GET["listeLivre"];

    // $json = json_encode((array)$listeLivre);
    // echo $json;
    $liste=json_decode($listeLivre);
    echo $listeLivre;

?>