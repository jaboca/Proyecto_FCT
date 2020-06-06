import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  constructor(public platform: Platform) { 
  }
  //esta funcion esta comentada porque aunque no funcione puede ser interesante tenerla para en un futuro (cuando pueda resolver los problemas que me da) poder implementarla
  /*exitApp(){
    navigator['app'].exitApp;
  }*/
  ngOnInit() {
  }

}
