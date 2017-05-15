import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livre } from '../../classes/Livre';
import { Famille } from '../../classes/Famille';

/**
 * Generated class for the RetraitLivre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-retrait-livre',
  templateUrl: 'retrait-livre.html',
})
export class RetraitLivre {

  famille:Famille;
  allRetrait:Array<any>;
  listeExemplaire:Array<any>;

  indexLivreChoisi:number;

  livreChoisi:boolean=false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allRetrait=new Array<any>();
    this.listeExemplaire=new Array<any>();
    //this.famille=new Famille(1, "Borelli", "0623336724", "geoffrey.borelli@gmail.com");
    this.famille=navParams.get("param1");
    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/recupereExemplaireFamille.php?famille="+this.famille.ID, true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = JSON.parse(xhr.responseText);
        //var rep = xhr.responseText;
        this.listeExemplaire=rep;
			}
      else {
        
      }
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetraitLivre');
  }

  selectExemplaire(i:number) {
    console.log("ok");
    this.livreChoisi=true;
    this.indexLivreChoisi=i;
    console.log(this.listeExemplaire[this.indexLivreChoisi]);
    this.allRetrait[this.allRetrait.length]=this.listeExemplaire[this.indexLivreChoisi];
    
  }

  supprimeRetrait(index:any){
    for (var i:number=index; i<this.allRetrait.length-1; i++){
      this.allRetrait[i]=this.allRetrait[i+1];
    }
    this.allRetrait.length--;
  }

  validerListe(){
    var xhr = new XMLHttpRequest();
    	// envoi requete
      var listeLivre=JSON.stringify(this.allRetrait);
      var famille=JSON.stringify(this.famille);
      console.log(famille);
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/retraitLivre.php?famille="+famille+"&&listeLivre="+listeLivre, true);
    	xhr.send(null);

    	xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				 //var rep = JSON.parse(xhr.responseText);
        var rep = xhr.responseText;
        console.log(rep);
			}
      else {
        console.log("xhr.readyState : "+xhr.readyState+" xhr.status : "+xhr.status);
      }
		}

    this.listeExemplaire=new Array<any>();
    this.allRetrait=new Array<any>();
    var xhr2 = new XMLHttpRequest();
    	// envoi requete
    	xhr2.open("GET", "http://leofazendeiro.fr/TestApero/recupereExemplaireFamille.php?famille="+this.famille.ID, true);
    	xhr2.send(null);

    	xhr2.onreadystatechange = () => {
			if(xhr2.readyState == 4 && xhr2.status == 200){
				 var rep = JSON.parse(xhr2.responseText);
        //var rep = xhr.responseText;
        this.listeExemplaire=rep;
			}
      else {
        
      }
		}

  }

}
