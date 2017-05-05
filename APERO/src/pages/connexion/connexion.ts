import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Accueil } from '../accueil/accueil'
import { Session } from '../../classes/Session'

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
  public erreur: boolean = false;
  public session: Session;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.session=new Session();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Connexion');
  }

  connexion(login: string, password: string) {
    var xhr = new XMLHttpRequest();
    var rep;
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/authentification.php?login=" + login + "&password=" + password, true);
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        rep = JSON.parse(xhr.responseText);
        console.log("Réponse authentification :");
        console.log(xhr.responseText);

        if (rep) {
          console.log("Connexion réussie");
          this.session.setConnecte(true);
          this.navCtrl.push(Accueil);
          this.erreur = false;
        } else {
          console.log("Connexion échouée");
          this.erreur = true;
        }
      }
    }
  }
}
