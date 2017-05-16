export class Famille{
   public ID :number;
   public nom:string;
   public telephone:string;
   public mail:string;
   public solde:number;

    constructor(p_id:number,p_nom:string,p_telephone:string,p_mail:string,p_solde:number){
        this.ID=p_id;
        this.nom=p_nom;
        this.mail=p_mail;
        this.telephone=p_telephone;
        this.solde=p_solde;
    }
    
}