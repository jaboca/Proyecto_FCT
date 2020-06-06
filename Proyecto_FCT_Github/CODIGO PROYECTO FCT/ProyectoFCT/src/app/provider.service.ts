import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './globales/globales';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public nombre: string = "";
  url = 'http://localhost:59298/api/Usuarios/propiedades/' ;
  

  constructor(public http: HttpClient, public Glo : Global) {
 
  }

  getdatosusuario(nombre) {
    var d;
    var url;
    url= 'http://localhost:59298/api/Usuarios/propiedades/' + nombre ;
    console.log ('accedo a ' +url )
    d= this.http.get( url);
 
    return d;
    
   
  }
}
