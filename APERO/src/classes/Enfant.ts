import { Classe } from './Classe';
import { Etablissement } from './Etablissement';
import { Famille } from './Famille';

export class Enfant{
   public ID :number;
   public nom:string;
   public prenom:string;
   public classe:Classe;
   public etablissement:Etablissement;
   public famille:Famille;

    constructor(p_id:number,p_nom:string,p_prenom:string,p_classe:Classe,p_etablissement:Etablissement, p_famille:Famille){
        this.ID=p_id;
        this.nom=p_nom;
        this.prenom=p_prenom;
        this.classe=p_classe;
        this.etablissement=p_etablissement;
        this.famille=p_famille;
    }
}