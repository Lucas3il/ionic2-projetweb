import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestionLivre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestion-livre',
  templateUrl: 'gestion-livre.html',
})
export class GestionLivre {
  allLivre:Array<any>;
  tabAuteur:Array<any>;
  tabEditeur:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allLivre=new Array<any>();
    this.tabAuteur=new Array<any>();
    this.tabEditeur=new Array<any>();
    var xhr = new XMLHttpRequest();
    	//envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/recupereLivre.php", true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = JSON.parse(xhr.responseText);
        //var rep = xhr.responseText;
        this.allLivre=rep;
        console.log(this.allLivre)
			}
      else {
        
      }

      var xhr2 = new XMLHttpRequest();
    	// envoi requete
    	xhr2.open("GET", "http://leofazendeiro.fr/TestApero/recupereEditeur.php", true);
    	xhr2.send(null);

    	xhr2.onreadystatechange = () => {
			if(xhr2.readyState == 4 && xhr2.status == 200){
				 var rep2 = JSON.parse(xhr2.responseText);
        //var rep = xhr.responseText;
        this.tabEditeur=rep2;
        console.log(this.tabEditeur);
			}
      else {
        
      }
		}

    var xhr3 = new XMLHttpRequest();
    	// envoi requete
    	xhr3.open("GET", "http://leofazendeiro.fr/TestApero/recupereAuteur.php", true);
    	xhr3.send(null);

    	xhr3.onreadystatechange = () => {
			if(xhr3.readyState == 4 && xhr3.status == 200){
				 var rep3 = JSON.parse(xhr3.responseText);
        //var rep = xhr.responseText;
        this.tabAuteur=rep3;
        console.log(this.tabAuteur);
			}
      else {
        
      }
    }
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionLivre');
  }

  supprimeLivre(i:number){
    console.log(this.allLivre[i]["ISBN_Livre"]);
     var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/supprimeLivre.php?ISBN="+this.allLivre[i]["ISBN_Livre"], true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = xhr.responseText;
         console.log(rep);

			}
      else {
        
      }
		}

  }

  ajoutLivre(isbn:number, titre:string, auteur:number, annee:number, prix:number, editeur:number){
    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/ajoutLivre.php?isbn="+isbn+"&&titre="+titre+"&&auteur="+auteur+"&&annee="+annee+"&&prix="+prix+"&&editeur="+editeur, true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = xhr.responseText;
         console.log(rep);

			}
      else {
        
      }
		}
   }

}
