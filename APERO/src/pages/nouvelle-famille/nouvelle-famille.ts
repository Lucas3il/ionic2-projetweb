import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Accueil } from '../accueil/accueil';

/**
 * Generated class for the NouvelleFamille page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nouvelle-famille',
  templateUrl: 'nouvelle-famille.html',
})
export class NouvelleFamille {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouvelleFamille');
  }

  ajoutFamille(nom,mail,tel){
      if (nom != "" && mail != "" && tel != null ) {
      var xhr = new XMLHttpRequest();
      // envoi requete
      console.log("Enfant ajouté : ");
      xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=ajouteFamille&&mail_famille=" + mail + "&&telephone_famille=" + tel + "&&nom_famille=" + nom  , true);
      xhr.send(null);
      xhr.onreadystatechange =  ()  => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert('Sauvegarde effectuée');
          console.log(xhr.responseText);
          this.navCtrl.setRoot(Accueil);
        }
      }
    } else {
      alert('Tous les champs doivent être renseignés !');
    }
  }

}
