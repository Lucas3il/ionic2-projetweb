import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  monLabel:string="salut";
  zob:any;

  constructor(public navCtrl: NavController, private http:Http) {


    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/HelloWorld.php", true);
    	xhr.send(null);

    	xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var rep = JSON.parse(xhr.responseText);
        console.log("rep : "+rep.nomClient+" "+rep.listePizzas);
			}
      else {
        console.log("else");
      }
		}
 
  }

  function(zob:string) {
    console.log(zob);
  }

}
