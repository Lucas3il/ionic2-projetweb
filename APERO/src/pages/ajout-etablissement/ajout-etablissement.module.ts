import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AjoutEtablissement } from './ajout-etablissement';

@NgModule({
  declarations: [
    AjoutEtablissement,
  ],
  imports: [
    // IonicModule.forChild(AjoutEtablissement),
  ],
  exports: [
    AjoutEtablissement
  ]
})
export class AjoutEtablissementModule {}
