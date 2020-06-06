import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PruebaService } from '../prueba.service'; //importamos nuestro service
import { HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';


import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  constructor(public http: HttpClient, private router: Router, public glo: Global, public navCtrl: NavController, public postServices: PruebaService) { }
  ModificarUsu(id) {
    var url = 'http://localhost:59298/api/Administradores/Modificar/' +  this.glo.idAdmin + "/" + this.glo.nombre + "/" + this.glo.Contra;
  
  

    return new Promise(resolve => {
      this.http.put(url,null).subscribe(data => {
        if (data==true) 
        {
          this.router.navigateByUrl('/home');
          alert('Usuario modificado: ' + this.glo.nombre);
        
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




