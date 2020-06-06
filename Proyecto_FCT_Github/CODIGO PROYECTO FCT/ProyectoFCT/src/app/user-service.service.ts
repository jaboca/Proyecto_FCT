import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://localhost:59298/api/Usuarios';

  constructor(public http: HttpClient) {

  }

  getPostsUser() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
     
    });
  }
}
