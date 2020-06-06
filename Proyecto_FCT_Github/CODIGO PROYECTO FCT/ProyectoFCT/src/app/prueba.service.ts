import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PruebaService {

  url = 'http://localhost:59298/api/administradores';

  constructor(public http: HttpClient) {

  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
     
    });
  }

}