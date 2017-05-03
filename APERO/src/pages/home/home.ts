import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { DepotLivre } from '../depot-livre/depot-livre';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  monLabel:string="salut";
  zob:any;

<<<<<<< HEAD
  constructor(public navCtrl: NavController) {
=======
  constructor(public navCtrl: NavController, private http:Http) {

>>>>>>> eb4a4637233ba5daf5b2a5c19de02d1846ebbbfe

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
   goTo() {
  }

  toDepot():void {
    this.navCtrl.push(DepotLivre);
  }

}
