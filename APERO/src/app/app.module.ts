import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { Test } from '../pages/test/test';
import { AjoutEtablissement } from '../pages/ajout-etablissement/ajout-etablissement';
import { DepotLivre } from '../pages/depot-livre/depot-livre';
import { Accueil } from '../pages/accueil/accueil';
import { Connexion } from '../pages/connexion/connexion';
import { RetraitLivre } from '../pages/retrait-livre/retrait-livre';
import { GestionFamille } from '../pages/gestion-famille/gestion-famille';
import { GestionLivre } from '../pages/gestion-livre/gestion-livre';
import {NouvelleFamille}  from '../pages/nouvelle-famille/nouvelle-famille';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Test,
    AjoutEtablissement,
    DepotLivre,
    Accueil,
    Connexion,
    RetraitLivre,
    GestionFamille,
    GestionLivre,
    NouvelleFamille
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Test,
    AjoutEtablissement,
    DepotLivre,
    Accueil,
    Connexion,
    RetraitLivre,
    GestionFamille,
    GestionLivre,
    NouvelleFamille
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
