<?php
	
	class Commande {

		var $nomClient;

		var $listePizzas;

	}
	
	$com=new Commande();
	
	$com->nomClient="Geoffrey";
	$com->listePizzas="oktest";
	
	$json = json_encode((array)$com );
	
	echo $json;
?>