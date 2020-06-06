import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {
  constructor(public http: HttpClient,public navCtrl: NavController, private router: Router,public glo : Global) { }


  compruebausu() {
    var url = 'http://localhost:59298/api/Usuarios/LoginUsuario/' + this.glo.nombre + '/' + this.glo.Contra;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        if (data==true) 
        {
          this.router.navigateByUrl('/usuario');
          alert('Bienvenido/a ' + this.glo.nombre);
        }
        else 
        {
          alert('Usuario no encontrado. Por favor, compruebe que los datos sean correctos');
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
