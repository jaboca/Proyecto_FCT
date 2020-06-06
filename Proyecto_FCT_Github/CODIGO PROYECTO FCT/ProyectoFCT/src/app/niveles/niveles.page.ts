import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NivelService } from '../nivelprovider'; //importamos nuestro service
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Global } from '../globales/globales';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit {




  constructor(public http: HttpClient, private router: Router, public glo: Global, public navCtrl: NavController, public postNivel: NivelService) {

    this.getNiveles();

  }
  ionViewDidEnter() {
    this.getNiveles();//Llamamos a la función getPost cuando la vista se cargue
  }

  getNiveles() { //llamamos a la funcion getPost de nuestro servicio.
    console.log('estoy en getniveles');
    this.postNivel.getNiveles()
      .then(data => {
        //   console.log('dentro del then ');

        this.glo.nivelactual = data;
      });
    //   console.log('fin getniveles');
  }
  EnviaRespuesta() {
   
    if (this.glo.nivelactual.Respuesta == this.glo.resp) {
      if(this.glo.nivelactual.Ultimo < 1){
        this.glo.usuario.IdNivel=this.glo.usuario.IdNivel + 1;
      }else{
        this.router.navigateByUrl('/estadisticas');
      }
      this.glo.usuario.Puntuacion=this.glo.usuario.Puntuacion + this.glo.nivelactual.Puntosacierto;
      
      var url = 'http://localhost:59298/api/Usuarios/ModificarUsu/' + this.glo.usuario.IdUsuario + '/' + this.glo.usuario.IdNivel + '/' + this.glo.usuario.Puntuacion;
      alert('Respuesta correcta. Pasando al siguiente nivel');
      return new Promise(resolve => {
        this.http.put(url,null).subscribe(data => {
          if (data==true) 
          {
            console.log(url);
            this.getNiveles();
            alert('Datos guardados.');
          }
          else 
          {
            alert('Ha ocurrido algun error');
          }
        }, error => {
          console.log(error);
        });
  
      }); 

    }else{

      this.glo.usuario.Puntuacion =this.glo.usuario.Puntuacion - this.glo.nivelactual.Puntosfallo;
      var url = 'http://localhost:59298/api/Usuarios/ModificarUsu/' + this.glo.usuario.IdUsuario + '/' + this.glo.nivelactual.IdNivel + '/' + this.glo.usuario.Puntuacion;
      alert('Respuesta incorrecta.');
      return new Promise(resolve => {
        this.http.put(url,null).subscribe(data => {
          if (data==true) 
          {
            alert('Datos guardados.');
          
          }
          else 
          {
            alert('Ha ocurrido algun error');
          }
        }, error => {
          console.log(error);
        });
  
      }); 
    }
  }


  ngOnInit() {
  }

}
