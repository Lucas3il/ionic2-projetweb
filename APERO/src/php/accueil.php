<?php
    include 'connexionBase.php';
    $conn = connexion();

 
        $data[] = Array();

        $stmt = $conn->prepare("SELECT Nom, ID_Famille FROM Famille;");
        $stmt->execute();
        while($row  = $stmt->fetch(PDO::FETCH_OBJ))
        {
            $data[] = $row;
        }
        echo json_encode((Array)$data);

        // if( ! $row)
        // {
        //     die('nothing found');
        // }
        $dbh = null;
?>
