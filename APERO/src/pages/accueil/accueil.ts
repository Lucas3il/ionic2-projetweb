import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Famille } from '../../classes/Famille';

/**
 * Generated class for the Accueil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class Accueil {

  familles: any;

  constructor(public navCtrl: NavController) {
    this.chargerListeFamilles();
  }

  chargerListeFamilles(){
    var listeFamilles:Array<Famille> = new Array<Famille>();
    var xhr = new XMLHttpRequest();
          // envoi requete
          xhr.open("GET", "http://leofazendeiro.fr/TestApero/accueil.php", true);
          xhr.send(null);

          xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200){
            var rep:Array<any> = JSON.parse(xhr.responseText);
            
            var famille:Famille;
            for (var i:number=1;i<rep.length;i++){
              famille = new Famille(rep[i]["ID_Famille"],rep[i]["Nom"],rep[i]["Telephone_Famille"],rep[i]["Mail_Famille"]);
              listeFamilles.push(famille);
              console.log(famille);
            }
          }
          else {
            console.log("else");
          }
        }
     this.familles=listeFamilles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accueil');
  }  


itemSelected(item: string) {
    console.log("Selected Item", item);
}
}
