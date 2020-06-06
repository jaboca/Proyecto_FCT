import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  constructor(public http: HttpClient,public navCtrl: NavController, private router: Router) { }
  nombreadmi: string = "";
  Contra: string = "";


  compruebalogin() {
    var url = 'http://localhost:59298/api/administradores/login/' + this.nombreadmi + '/' + this.Contra;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        if (data==true) 
        {
          this.router.navigateByUrl('/administracion');
          alert('Bienvenido/a ' + this.nombreadmi);
        }
        else 
        {
          this.router.navigateByUrl('/registro');
          alert('Administrador no encontrado. Por favor, compruebe que los datos sean correctos');
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

