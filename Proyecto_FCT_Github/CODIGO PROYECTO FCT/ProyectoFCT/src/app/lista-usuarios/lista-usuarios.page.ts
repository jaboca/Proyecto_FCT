import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  arrayPosts2:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(private router: Router, public glo: Global,public http: HttpClient,public navCtrl: NavController, public postServices_User:UserServiceService) {
    this.getPostsUser();
  }
  ionViewDidLoad() {
    this.getPostsUser();//Llamamos a la función getPost cuando la vista se cargue
  }

  ionViewDidEnter(){
    this.getPostsUser();
  }

  getPostsUser() { //llamamos a la funcion getPost de nuestro servicio.
    
    this.postServices_User.getPostsUser()
    .then(data => {
      this.arrayPosts2 = data; 
      console.log(12);
    });
  }

  ModificarUsuario(id,nivel,puntos) {
      this.glo.usuario=[];
      this.glo.usuario.Puntuacion=puntos;
      this.glo.usuario.IdNivel=nivel;
      this.glo.usuario.IdUsuario=id;
      this.router.navigateByUrl('/modificarusuario');
    
  }

  EliminarUsuario(id) {
    if (confirm("¿Estas seguro?") == true) {
      var url = 'http://localhost:59298/api/Usuarios/Delete/' + id;
      return new Promise(resolve => {
        this.http.delete(url).subscribe(data => {
          this.getPostsUser()
        }, error => {
          console.log(error);
        });

      });
    }
  }

  ngOnInit() {
  }

}
