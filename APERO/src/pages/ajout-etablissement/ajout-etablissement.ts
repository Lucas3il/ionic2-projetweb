import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AjoutEtablissement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ajout-etablissement',
  templateUrl: 'ajout-etablissement.html',
})
export class AjoutEtablissement {

  public NomEtablissement : string;
  public AdresseEtablissement : string;
  public TelEtablissement : string;


 // mesClasses: Array<string>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
   // this.mesClasses=new Array<string>();
  }

   ajoutClasse(NomEtablissement:string, AdresseEtablissement:string, TelEtablissement:string):void {
  //       let prompt = this.alertCtrl.create({
  //     title: 'Ajout d\'une classe',
  //     message: "Entrer le nom de la classe de l'établissement correspondant",
  //     inputs: [
  //       {
  //         name: 'NomDeLaClasse',
  //         placeholder: 'Classe'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           console.log('Saved clicked');
  //           this.mesClasses[this.mesClasses.length]=data.NomDeLaClasse;
  //           console.log(data);
  //         }
  //       }
  //     ]
  //   });
   // prompt.present();

        var xhr = new XMLHttpRequest();
        // envoi requete
        xhr.open("GET", "http://leofazendeiro.fr/TestApero/ajoutEtablissement.php?NomEtab="+NomEtablissement+"&AdrEtab="+AdresseEtablissement+"&TelEtab="+TelEtablissement+"", true);
        xhr.send(null);
        xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
          var rep = xhr.responseText;
          console.log("OK");
          console.log(rep);
        }
        else {
          console.log("NOK");
        }
  }
}
//classe='"+this.mesClasses+"'
}