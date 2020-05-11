import { Component, OnInit } from '@angular/core';
import { Socio } from '../model/socio';
import { SocioService } from '../socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-socio',
  templateUrl: './registrar-socio.component.html',
  styleUrls: ['./registrar-socio.component.css']
})
export class RegistrarSocioComponent implements OnInit {

  socio : Socio = new Socio();
  constructor(private serviciosocio : SocioService,
              private router : Router) { }

  ngOnInit(): void {
  }

  registrarSocio()
  {
    this.serviciosocio.registrarSocio(this.socio).subscribe(
      data => this.router.navigate(['listarSocios'])
    );
  }

}
