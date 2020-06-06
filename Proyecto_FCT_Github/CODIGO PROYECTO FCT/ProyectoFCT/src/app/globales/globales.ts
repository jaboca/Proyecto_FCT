import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {

  public nombre : string = "";
  public Contra: string = "";
  public usuario;
  public nivelactual;

  public resp : string = "";

  public idAdmin: number;
  public idNivel: number;
  public Titulonivel: string = "";
  public PreguntaNivel: string = "";
  public RespuestaNivel: number;
  public Puntosacierto: number;
  public Puntosfallo: number;
  constructor() { }
}