import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PruebaService } from '../prueba.service'; //importamos nuestro service
import { HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';


@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.page.html',
  styleUrls: ['./modificarusuario.page.scss'],
})
export class ModificarusuarioPage implements OnInit {

  constructor(public http: HttpClient, private router: Router, public glo: Global, public navCtrl: NavController, public postServices: PruebaService) { }
  ModificarUsuario(id) {
    var url = 'http://localhost:59298/api/Usuarios/ModificarUsu/' +  this.glo.usuario.IdUsuario + '/' + this.glo.usuario.IdNivel + '/' + this.glo.usuario.Puntuacion;
  
  

    return new Promise(resolve => {
      this.http.put(url,null).subscribe(data => {
        if (data==true) 
        {
          console.log("correcto llamando a " + url)
          this.router.navigateByUrl('/administracion');
        
        }
        else 
        {
          alert('Ha ocurrido algun error');
        }
      }, error => {
        console.log(error);
      });

    }); 
   // this.navCtrl.navigateForward('/pagina2');
  }

  ngOnInit() {
  }
}
