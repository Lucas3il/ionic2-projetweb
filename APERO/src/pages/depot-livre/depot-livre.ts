import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livre } from '../../classes/Livre'
import { Famille } from '../../classes/Famille'
import { test } from '../../classes/test'

/**
 * Generated class for the DepotLivre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-depot-livre',
  templateUrl: 'depot-livre.html',
})
export class DepotLivre {
  
  famille:Famille;
  allDepot:Array<Livre>;

  listeOeuvres:Array<any>;
  indexLivreChoisi:number;
  tabAnnee:Array<number>;
  tabEtat:Array<any>;

  livreChoisi:boolean=false;

  etat:string=null;
  annee:string=null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allDepot=new Array<Livre>();
    //this.famille=new Famille(1, "Borelli", "0623336724", "geoffrey.borelli@gmail.com");
    this.listeOeuvres=new Array<any>();
    this.tabEtat=new Array<any>();
    this.tabAnnee=new Array<number>();
    this.famille=navParams.get("param1");
    for (var i:number=0; i<20; i++){
      this.tabAnnee[i]=new Date().getFullYear()-1-i;
    }
  

    var xhr = new XMLHttpRequest();
    	// envoi requete
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/recupereLivre.php", true);
    	xhr.send(null);

    	xhr.onreadystatechange = () => {
			if(xhr.readyState == 4 && xhr.status == 200){
				 var rep = JSON.parse(xhr.responseText);
        //var rep = xhr.responseText;
        this.listeOeuvres=rep;
			}
      else {
        
      }
		}
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://leofazendeiro.fr/TestApero/recupereEtat.php", true);
    xhr2.send(null);
    
    xhr2.onreadystatechange = () => {
      if(xhr2.readyState == 4 && xhr2.status == 200){
        var rep2 = JSON.parse(xhr2.responseText);
        //var rep = xhr.responseText;
        this.tabEtat=rep2;
      }
      else {
      }
    }
    console.log(this.listeOeuvres);
    console.log(this.tabEtat);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepotLivre');
  }

  selectLivre(i:number) {
    this.livreChoisi=true;
    this.indexLivreChoisi=i;
    
  }

  ajoutDepot(etat:string, annee:string):void {
    this.allDepot[this.allDepot.length]=new Livre(this.listeOeuvres[this.indexLivreChoisi].ISBN_Livre, etat, annee, this.listeOeuvres[this.indexLivreChoisi].Titre_Livre, this.listeOeuvres[this.indexLivreChoisi].Nom_Auteur+" "+this.listeOeuvres[this.indexLivreChoisi].Prenom_Auteur, this.listeOeuvres[this.indexLivreChoisi].Nom_Editeur);
    this.etat=null;
    this.annee=null;
    this.livreChoisi=false; 
  }

  supprimeDepot(index:any){
    for (var i:number=index; i<this.allDepot.length-1; i++){
      this.allDepot[i]=this.allDepot[i+1];
    }
    this.allDepot.length--;
  }

  validerListe(){
    var xhr = new XMLHttpRequest();
    	// envoi requete
      var listeLivre=JSON.stringify(this.allDepot);
      var famille=JSON.stringify(this.famille);
      console.log(famille);
    	xhr.open("GET", "http://leofazendeiro.fr/TestApero/depotLivre.php?famille="+famille+"&&listeLivre="+listeLivre, true);
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
  }

}
