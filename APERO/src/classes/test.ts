export class test {
    atra:string;
    atrb:string;

    setAtr(atra:string, atrb:string){
        this.atra=atra;
        this.atrb=atrb;
    }

    getAtr():test {
        return this;
    }
}

