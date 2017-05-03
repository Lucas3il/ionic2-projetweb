<?php

    function connexion(){
        $dsn = 'mysql:dbname=leofazenqyapero;host=leofazenqyapero.mysql.db'; 
        $user = 'leofazenqyapero'; 
        $password = 'Apero12000'; 

        try  
        { 
        // Connect 
        $conn = new PDO($dsn, $user, $password);
        return $conn;
        }
        catch (PDOException $e)
        {    
            echo 'Connexion échouée : ' . $e->getMessage();
        }
    }

?>