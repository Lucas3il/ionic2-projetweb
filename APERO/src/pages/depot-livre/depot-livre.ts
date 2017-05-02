import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livre } from '../../classes/Livre'

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
  
  famille:string="A DEFINIR";
  allDepot:Array<Livre>;

  titre:string=null;
  auteur:string=null;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allDepot=new Array<Livre>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepotLivre');
  }

  ajoutDepot(titre:string, auteur:string):void {
    this.allDepot[this.allDepot.length]=new Livre(titre, auteur);
    this.auteur=null;
    this.titre=null;
  }

  supprimeDepot(index:any){
    for (var i:number=index; i<this.allDepot.length-1; i++){
      this.allDepot[i]=this.allDepot[i+1];
    }
    this.allDepot.length--;
  }

}
