import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Famille } from '../../classes/Famille';
import { Enfant } from '../../classes/Enfant'

/**
 * Generated class for the GestionFamille page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestion-famille',
  templateUrl: 'gestion-famille.html',
})
export class GestionFamille {
  enfants: any;
  tel: string;
  mail: string;
  nom: string;
  famille: Famille

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.famille = navParams.get("param1");
    console.log(this.famille);
    this.tel = this.famille.telephone;
    this.mail = this.famille.mail;
    this.nom = this.famille.nom;
    this.chargerListeEnfants();
  }

  chargerListeEnfants() {
    var listeEnfants: Array<Enfant> = new Array<Enfant>();
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=getEnfants&&id_famille=" + this.famille.ID, true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("chargerlisteEnfants");
        if (xhr.responseText == "") {
          console.log("réponse nulle");
        }
        else {
          console.log(xhr.responseText);
        }
        // var rep: Array<any> = JSON.parse(xhr.responseText);
        // console.log(rep);

        var enfant: Enfant;
        // for (var i: number = 1; i < rep.length; i++) {
        //   enfant = new Enfant(rep[i]["ID_Enfant"], rep[i]["Nom_Enfant"], rep[i]["Prenom_Enfant"], rep[i]["Classe_Enfant"], rep[i]["Etablissement_Enfant"], rep[i]["Famille_Enfant"]);
        //   listeEnfants.push(enfant);
        //   console.log(enfant);
        // }
      }
    }
    // this.enfants = listeEnfants;
  }

  modificationFamille(tel: string, mail: string, nom: string) {
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/accueil.php?action=majFamille&&id_famille=" + this.famille.ID + "&&mail_famille=" + mail + "&&telephone_famille=" + tel + "&&nom_famille=" + nom, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      }
    }
    alert('Sauvegarde effectuée');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionFamille');
  }

}
