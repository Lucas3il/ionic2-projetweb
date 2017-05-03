export class Famille{
   public ID :number;
   public nom:string;
   public telephone:string;
   public mail:string;

    constructor(p_id,p_nom,p_telephone,p_mail){
        this.ID=p_id;
        this.nom=p_nom;
        this.mail=p_mail;
        this.telephone=p_telephone;
    }
}