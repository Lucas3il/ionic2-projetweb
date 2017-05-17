import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livre } from '../../classes/Livre';
import { AlertController } from 'ionic-angular';
import { Famille } from '../../classes/Famille';
/**
 * Generated class for the AchatLivre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-achat-livre',
  templateUrl: 'achat-livre.html',
})
export class AchatLivre {

  allLivre:Array<Livre>;
  panier:Array<any>;
  listeChoisie:Array<any>;
  etatExemplaires:Array<any>;
  exemplaireChoisi:number;
  famille:Famille;




  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.famille=this.famille=navParams.get("param1");
    this.allLivre=new Array<Livre>();
    this.panier=new Array<any>();
    this.listeChoisie=new Array<any>();
    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/recupereLivre.php", true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = JSON.parse(xhr.responseText);
        //var rep = xhr.responseText;
        this.allLivre=rep;
        console.log(this.allLivre);
			}
      else {
        
      }
		}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchatLivre');
  }

  ajoutPanier(i):void {
    this.etatExemplaires=new Array<any>();
    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/recupereEtatExemplaires.php?livre="+this.allLivre[i]["ISBN_Livre"], true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = JSON.parse(xhr.responseText);
        //var rep = xhr.responseText;
        this.etatExemplaires=rep;
        let alert = this.alertCtrl.create();
    alert.setTitle('Choisir un exemplaire');
    for (var n:number=0; n<this.etatExemplaires.length; n++){
      alert.addInput({
        type: 'radio',
        label: this.etatExemplaires[n]["Etat_Exemplaire"]+", "+this.etatExemplaires[n]["AnneeMiseADispo_Exemplaire"],
        value: this.etatExemplaires[n]["ID_Exemplaire"],
        checked: false
      });
    }
    alert.addButton('Cancel');
    if (this.etatExemplaires.length>0){
      alert.addButton({
        text: 'OK',
        handler: data => {
          this.exemplaireChoisi=data;
          this.listeChoisie[this.listeChoisie.length]=this.allLivre[i];
          this.panier[this.panier.length]=data;
        }
      });
    }
    alert.present();
			}
      else {
        console.log("wait");
      }
		}
    console.log("exemplaire choisi : "+this.exemplaireChoisi);
  }

  retireListe(i:number){
    this.listeChoisie[i]=null;
    this.panier[i]=null;
    for (var j=i; j<this.panier.length-1; j++){
      this.listeChoisie[j]=this.listeChoisie[j+1];
      this.panier[j]=this.panier[j+1];
    }
    this.panier.length--;
    this.listeChoisie.length--;
  }

  validerListe():void{
    console.log(this.panier);
    var xhr = new XMLHttpRequest();
    var listeLivre=JSON.stringify(this.panier);
      var famille=JSON.stringify(this.famille);
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/acheteLivre.php?famille="+famille+"&&exemplaires="+listeLivre, true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				// var rep = JSON.parse(xhr.responseText);
        var rep = xhr.responseText;
        console.log(rep);
        this.panier=new Array<any>();
        this.listeChoisie=new Array<any>();
			}
      else {
        
      }
		}
  }
}
