import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PruebaService } from '../prueba.service'; //importamos nuestro service
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'home.page',
  templateUrl: 'home.page.html'
})
export class HomePage {

  arrayPosts: any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(public http: HttpClient, private router: Router, public glo: Global, public navCtrl: NavController, public postServices: PruebaService) {
    this.getPosts();
  }
  ionViewDidEnter() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.

    this.postServices.getPosts()
      .then(data => {
        this.arrayPosts = data;
      });
  }

  ModificarUsuario(id,nombre,contrasenya) {
    if (confirm("¿" + "Deseas modificar el usuario : " + nombre + "?") == true) {
      this.glo.Contra=contrasenya;
      this.glo.nombre=nombre;
      this.glo.idAdmin=id;
      this.router.navigateByUrl('/modificar');
    }
  }

  EliminarUsuario(id) {
    if (confirm("¿Estas seguro?") == true) {
      var url = 'http://localhost:59298/api/Administradores/Delete/' + id;
      return new Promise(resolve => {
        this.http.delete(url).subscribe(data => {
          this.getPosts();
        }, error => {
          console.log(error);
        });

      });
    }
  }
}
