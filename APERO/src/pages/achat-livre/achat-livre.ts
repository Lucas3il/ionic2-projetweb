import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livre } from '../../classes/Livre';
import { AlertController } from 'ionic-angular';
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
  etatExemplaires:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.allLivre=new Array<Livre>();
    this.panier=new Array<any>();
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
        console.log(this.etatExemplaires.length);
        let alert = this.alertCtrl.create();
    alert.setTitle('Choisir un exemplaire');
    for (var n:number=0; n<this.etatExemplaires.length; n++){
      alert.addInput({
        type: 'radio',
        label: 'alpha',//tab[0]["Etat_Exemplaire"]+", "+tab[0]["AnneeMiseADispo_Exemplaire"],
        value: 'beta',//tab[0]["ID_Exemplaire"],
        checked: false
      });
    }
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
      }
    });
    alert.present();
			}
      else {
        
      }
		}
    console.log("fait");

    
  }
}
