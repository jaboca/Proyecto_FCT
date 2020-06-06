import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './globales/globales';

@Injectable()
export class NivelService {

  

  constructor(public http: HttpClient,public Glo : Global) {

  }

  getNiveles() {
    var url = 'http://localhost:59298/api/Nivel/Niveles/' + this.Glo.usuario.IdNivel;

    console.log ('getniveles voy a acceder a ' + url );
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
     
    });
  }

}