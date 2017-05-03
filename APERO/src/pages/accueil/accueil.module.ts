import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Accueil } from './accueil';

@NgModule({
  declarations: [
    Accueil,
  ],
  imports: [
    IonicModule.forChild(Accueil),
  ],
  exports: [
    Accueil
  ]
})
export class AccueilModule {}
