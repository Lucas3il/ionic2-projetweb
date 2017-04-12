import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts:any;

  constructor(public navCtrl: NavController) {



    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/HelloWorld.php", true);
    	xhr.send(null);

    	xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				/*var rep = xhr.responseText;
				alert(rep);*/
				var rep = JSON.parse(xhr.responseText);
        console.log("rep : "+rep.nomClient+rep.listePizzas);
			}
      else {
        console.log("else");
      }
		}

  }

}
