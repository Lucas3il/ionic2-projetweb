export class Livre {
    Livre_Exemplaire:string;
    Etat_Exemplaire:string;
    AnneeMiseADispo_Exemplaire:string
    Titre:string;
    Auteur:string;
    Editeur:string;

    constructor(livre:string, etat:string, annee:string, titre:string, auteur:string, editeur:string){
        this.Livre_Exemplaire=livre;
        this.Etat_Exemplaire=etat;
        this.AnneeMiseADispo_Exemplaire=annee;
        this.Titre=titre;
        this.Auteur=auteur;
        this.Editeur=editeur;
    }
}