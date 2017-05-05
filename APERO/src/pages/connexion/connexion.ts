import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Accueil } from '../accueil/accueil'

/**
 * Generated class for the Connexion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class Connexion {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Connexion');
  }

  connexion(login:string,password:string) {
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/authentification.php?login="+login+"&password="+password, true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {

        var rep: boolean = JSON.parse(xhr.responseText);
        console.log("Réponse authentification :");
        console.log(rep);
        if (rep) {
          // redirectionAccueil();
        }
        else{

        }
      }
    }
  }

  redirectionAccueil() {
    this.navCtrl.push(Accueil);
  }
}
