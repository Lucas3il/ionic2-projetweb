import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Famille } from '../../classes/Famille';
import { Enfant } from '../../classes/Enfant';
import { Etablissement } from '../../classes/Etablissement';
import { Classe } from '../../classes/Classe';

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
  etablissements: any;
  classes: any;

  public afficherEnfant: boolean = false;
  public modifEnfant: boolean = false;
  public ajoutEnfant: boolean = false;


  tel: string;
  mail: string;
  nom: string;
  famille: Famille;
  solde: number;

  enfantSelectionne: Enfant;
  prenomEnfant: string;
  nomEnfant: string;
  classeEnfant: Classe;
  etablissementEnfant: Etablissement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.famille = navParams.get("param1");
    console.log(this.famille);
    this.tel = this.famille.telephone;
    this.mail = this.famille.mail;
    this.nom = this.famille.nom;
    this.solde = this.famille.solde;
    this.afficherEnfant = false;
    this.chargerListeEnfants();
    this.chargerListeClasses();
    this.chargerListeEtablissements();
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
        var rep: Array<any> = JSON.parse(xhr.responseText);
        console.log(rep);

        var enfant: Enfant;
        for (var i: number = 1; i < rep.length; i++) {
          enfant = new Enfant(rep[i]["ID_Enfant"], rep[i]["Nom_Enfant"], rep[i]["Prenom_Enfant"], rep[i]["Classe_Enfant"], rep[i]["Etablissement_Enfant"], rep[i]["Famille_Enfant"]);
          listeEnfants.push(enfant);
          console.log(enfant);
        }
      }
    }
    this.enfants = listeEnfants;
  }

  chargerListeEtablissements() {
    var listeEtablissements: Array<Etablissement> = new Array<Etablissement>();
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=getListeEtablissements", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("chargerListeEtablissements");
        if (xhr.responseText == "") {
          console.log("réponse nulle");
        }
        else {
          console.log(xhr.responseText);
        }
        var rep: Array<any> = JSON.parse(xhr.responseText);
        console.log(rep);

        var etablissement: Etablissement;
        for (var i: number = 1; i < rep.length; i++) {
          etablissement = new Etablissement(rep[i]["ID_Etablissement"], rep[i]["Nom_Etablissement"], rep[i]["Adresse_Etablissement"], rep[i]["Tel_Etablissement"]);
          listeEtablissements.push(etablissement);
          console.log(etablissement);
        }
      }
    }
    this.etablissements = listeEtablissements;
  }

  chargerListeClasses() {
    var listeClasses: Array<Classe> = new Array<Classe>();
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=getListeClasses", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("chargerListeClasses");
        if (xhr.responseText == "") {
          console.log("réponse nulle");
        }
        else {
          console.log(xhr.responseText);
        }
        var rep: Array<any> = JSON.parse(xhr.responseText);
        console.log(rep);

        var classe: Classe;
        for (var i: number = 1; i < rep.length; i++) {
          classe = new Classe(rep[i]["ID_Classe"], rep[i]["Section_Classe"]);
          listeClasses.push(classe);
          console.log(classe);
        }
      }
    }
    this.classes = listeClasses;
  }

  modificationFamille(nom: string, mail: string, tel: string) {
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=majFamille&&id_famille=" + this.famille.ID + "&&mail_famille=" + mail + "&&telephone_famille=" + tel + "&&nom_famille=" + nom, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert('Sauvegarde effectuée');
        console.log(xhr.responseText);
      }
    }
  }

  modificationEnfant(prenom: string, nom: string, classe: Classe, etablissement: Etablissement) {
    var xhr = new XMLHttpRequest();
    // envoi requete
    console.log("Enfant modifié :");
    console.log(nom);
    console.log(prenom);
    console.log(classe);
    console.log(etablissement);
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=majEnfant&&famille_enfant=" + this.famille.ID + "&&nom_enfant=" + nom + "&&prenom_enfant=" + prenom + "&&classe_enfant=" + classe.ID + "&&etablissement_enfant=" + etablissement.ID + "&&id_enfant=" + this.enfantSelectionne.ID, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert('Sauvegarde effectuée');
        console.log(xhr.responseText);
      }
    }
  }

  selectionEnfant(enfant: Enfant) {
    this.prenomEnfant = enfant.prenom;
    this.nomEnfant = enfant.nom;
    this.enfantSelectionne = enfant;

    this.afficherEnfant = true;
    this.ajoutEnfant = false;
    this.modifEnfant = true;

    this.classeEnfant = enfant.classe;
    var ID_Classe = enfant.classe;
    var ID_Etablissement = enfant.etablissement;
    var trouve: boolean = false;
    var i: number = 0;
    while (!trouve) {
      if (this.classes[i]["ID"] == ID_Classe) {
        trouve = true;
        this.classeEnfant = this.classes[i];
      }
      else {
        i++;
      }
    }
    i = 0;
    trouve = false;
    while (!trouve) {
      if (this.etablissements[i]["ID"] == ID_Etablissement) {
        trouve = true;
        this.etablissementEnfant = this.etablissements[i];
      }
      else {
        i++;
      }
    }
  }

  supprimerEnfant() {
    var xhr = new XMLHttpRequest();
    // envoi requete
    console.log("Enfant modifié :");
    console.log(this.enfantSelectionne.ID);
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=supprimeEnfant&&id_enfant=" + this.enfantSelectionne.ID, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert('Sauvegarde effectuée');
        console.log(xhr.responseText);
      }
    }
    this.chargerListeEnfants();
    this.ajoutEnfant = false;
    this.modifEnfant = false;
    this.afficherEnfant = false;
    this.prenomEnfant = "";
    this.nomEnfant = "";
    this.classeEnfant = null;
    this.etablissementEnfant = null;
  }

  ajouterEnfant() {
    if (this.prenomEnfant != "" && this.nomEnfant != "" && this.classeEnfant != null && this.etablissementEnfant != null) {
      var xhr = new XMLHttpRequest();
      // envoi requete
      console.log("Enfant ajouté : ");
      xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=ajouteEnfant&&nom_enfant=" + this.nomEnfant + "&&prenom_enfant=" + this.prenomEnfant + "&&classe_enfant=" + this.classeEnfant.ID + "&&etablissement_enfant=" + this.etablissementEnfant.ID + "&&famille_enfant=" + this.famille.ID, true);
      xhr.send(null);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert('Sauvegarde effectuée');
          console.log(xhr.responseText);
        }
      }
      this.chargerListeEnfants();

    } else {
      alert('Tous les champs doivent être renseignés !');
    }
  }

  nouvelEnfant() {
    this.ajoutEnfant = true;
    this.modifEnfant = false;
    this.afficherEnfant = true;
    this.prenomEnfant = "";
    this.nomEnfant = "";
    this.classeEnfant = null;
    this.etablissementEnfant = null;
    console.log(this.ajoutEnfant);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionFamille');
  }

  RAZSolde() {
      var xhr = new XMLHttpRequest();
      // envoi requete
      xhr.open("GET", "http://leofazendeiro.fr/TestApero/gestion-famille.php?action=raz_solde&&id_famille=" + this.famille.ID, true);
      xhr.send(null);
       xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert('Sauvegarde effectuée');
          console.log(xhr.responseText);
        }
      }
      this.solde=0;
  }

}
