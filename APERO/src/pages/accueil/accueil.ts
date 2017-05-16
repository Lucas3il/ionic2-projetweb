import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Famille } from '../../classes/Famille';
import {DepotLivre}  from '../depot-livre/depot-livre';
import {GestionFamille}  from '../gestion-famille/gestion-famille';
import {RetraitLivre}  from '../retrait-livre/retrait-livre';
import {GestionLivre}  from '../gestion-livre/gestion-livre';
import {NouvelleFamille}  from '../nouvelle-famille/nouvelle-famille';
import {AjoutEtablissement}  from '../ajout-etablissement/ajout-etablissement';
import {AchatLivre}  from '../achat-livre/achat-livre';

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
  familleSelectionnee:Famille;
  familles: any;
  tel:string;
  mail:string;
  nom:string;
  buttonDisabled=true;

  constructor(public navCtrl: NavController) {
    this.chargerListeFamilles();
  }

  chargerListeFamilles() {
    var listeFamilles: Array<Famille> = new Array<Famille>();
    var xhr = new XMLHttpRequest();
    // envoi requete
    xhr.open("GET", "http://leofazendeiro.fr/TestApero/accueil.php", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var rep: Array<any> = JSON.parse(xhr.responseText);

        var famille: Famille;
        for (var i: number = 1; i < rep.length; i++) {
          famille = new Famille(rep[i]["ID_Famille"], rep[i]["Nom"], rep[i]["Telephone_Famille"], rep[i]["Mail_Famille"],rep[i]["Solde_Famille"]);
          listeFamilles.push(famille);
        }
      }
    }
    this.familles = listeFamilles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accueil');
  }

  selectionFamille(item: Famille) {
    this.nom = item.nom;
    this.mail = item.mail;
    this.tel = item.telephone;
    this.familleSelectionnee= item;
    this.buttonDisabled=null;
    this.chargerListeFamilles();
  }

  goDepot(){
  this.navCtrl.push(DepotLivre, { param1: this.familleSelectionnee });
}

  goGestionFamille(){
   this.navCtrl.push(GestionFamille, { param1: this.familleSelectionnee });
  }

  goRetrait(){
    this.navCtrl.push(RetraitLivre, { param1: this.familleSelectionnee });
  }

  goGestionLivre(){
    this.navCtrl.push(GestionLivre);
  }

  goNouvelleFamille(){
    this.navCtrl.push(NouvelleFamille);
  }
  
  goGestionEtablissement(){
    this.navCtrl.push(AjoutEtablissement);
  }

  goAchatLivre(){
    this.navCtrl.push(AchatLivre, { param1: this.familleSelectionnee });
  }
}