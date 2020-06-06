import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProviderService } from '../provider.service'; //importamos nuestro service
import { Global } from '../globales/globales';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuario = null;
  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(public navCtrl: NavController, public postServices:ProviderService, public Glo : Global) {
   // this.getPosts2();
  }
  ionViewDidLoad() {
    
  }

  obtendatosusuario() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServices.getdatosusuario(this.Glo.nombre).subscribe(result => {
      
      this.usuario = result;
      this.Glo.usuario= result; // guardamos el usuario en global !
    //  console.log (' idNivel vale ' + this.Glo.usuario.IdNivel);
    });
   // this.postServices.getdatosusuario( 'JUAN');
    
  }

  ngOnInit() {
    this.obtendatosusuario();
  }

}
