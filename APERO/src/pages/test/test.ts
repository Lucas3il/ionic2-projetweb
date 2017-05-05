import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { test } from '../../classes/test'

/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  public name: string;
  public alterEgo: string;

  public Ttest:test;

    constructor(public navCtrl: NavController)   {  
      
  }

  test(name:string, alterEgo:string):void {

    this.Ttest.setAtr(name, alterEgo);

    // var xhr = new XMLHttpRequest();
    //     // envoi requete
    //     xhr.open("POST", "http://leofazendeiro.fr/TestApero/test.php?nom='"+name+"'&&prenom='"+alterEgo+"'", true);
    //     xhr.send(null);

    //     xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //       /*var rep = xhr.responseText;
    //       alert(rep);*/
    //       console.log("OK");
    //     }
    //     else {
    //       console.log("NOK");
    //     }
    //   }
  }
}
