<?php
    include 'connexionBase.php';
    $conn = connexion();

 
        $data[] = Array();
        $stmt = $conn->prepare("SELECT * FROM Famille;");
        $stmt->execute();
        while($row  = $stmt->fetch(PDO::FETCH_OBJ))
        {
            $data[] = $row;
        }
        echo json_encode((Array)$data);
        
        $dbh = null;
?>
