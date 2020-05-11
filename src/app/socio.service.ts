import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Socio } from "./model/socio";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private urlbase = "http://localhost:8080/api";
  private headers = new HttpHeaders(
    { 'Content-Type' : 'application/json' });
  constructor(private http : HttpClient) { }

  registrarSocio(nuevoSocio : Object)
  {
    console.log("enviando datos al REST");
    return this.http.post(this.urlbase + "/registrarSocio", nuevoSocio,
    { headers : this.headers });
  }

  obtenerListaSocios() : Observable<any>
  {
    console.log(this.urlbase + '/listarSocios');
    return this.http.get(this.urlbase + '/listarSocios').pipe(
      map(response => response as Socio[])
    );
  }

  obtenerListaSociosporNombre(nombre : String) : Observable<any>
  {
    console.log(this.urlbase + '/listarSociosporNombre/' + nombre);
    return this.http.get(this.urlbase + '/listarSociosporNombre/' + nombre).pipe(
      map(response => response as Socio[])
    );
  }
}
