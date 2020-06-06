import { Injectable } from "@angular/core";
@Injectable()

export class RegistroServices{
    constructor(private _url: 'http://localhost:59298/api/administradores/login/') { }

    nombreusuario: string
    id: string
    nom = []
    clav = []
    /*obtenerID(nombreAD: string,con : string) : string {
        //let ref = this.url.database.ref("Usuarios");
        ref.once("value", snapshot => {
            snapshot.forEach(child => {
                this.nom.push(child.val());
                this.clav.push(child.key);
            })
            for(let i = 0; i<this.nom.length;i++){
                if(nombreAD == this.nombreadmi && con == this.Contra){
                    return this.clav[i]
                }
            }
        })
        return null;
    }*/

}