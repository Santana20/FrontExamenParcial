import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../model/socio';
import { SocioService } from '../socio.service';

@Component({
  selector: 'app-listar-socios',
  templateUrl: './listar-socios.component.html',
  styleUrls: ['./listar-socios.component.css']
})
export class ListarSociosComponent implements OnInit {

  socios : Observable<Socio[]>;
  nom : String;

  constructor(private serviciosocio : SocioService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos()
  {
    console.log("llamando al servicio");
    this.serviciosocio.obtenerListaSocios().subscribe(
      socio => this.socios = socio
    )
  }

  ListaSociosporNombre()
  {
    this.serviciosocio.obtenerListaSociosporNombre(this.nom).subscribe(
      socio => this.socios = socio
    )
  }

}
