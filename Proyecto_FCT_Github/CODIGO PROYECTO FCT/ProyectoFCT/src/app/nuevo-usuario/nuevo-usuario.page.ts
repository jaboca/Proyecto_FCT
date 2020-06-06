import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  constructor(public http: HttpClient,public navCtrl: NavController, private router: Router,public glo : Global) { }
  creausu() {
    console.log('entrando en creausu')
    var url = 'http://localhost:59298/api/Usuarios/nuevo/' + this.glo.nombre + '/' + this.glo.Contra;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        if (data==true) 
        {
          this.router.navigateByUrl('/login-usuario');
          alert('Usuario creado: ' + this.glo.nombre);
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
