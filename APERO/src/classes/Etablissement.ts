export class Etablissement{
   public ID :number;
   public nom:string;
   public adresse:string;
   public telephone:string;

    constructor(p_id:number,p_nom:string,p_adresse:string,p_telephone:string){
        this.ID=p_id;
        this.nom=p_nom;
        this.adresse=p_adresse;
        this.telephone=p_telephone;
    }
}