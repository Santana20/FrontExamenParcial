import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarSocioComponent } from './registrar-socio/registrar-socio.component';
import { ListarSociosComponent } from './listar-socios/listar-socios.component';


const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'registrarSocio', component: RegistrarSocioComponent },
  { path: 'listarSocios', component: ListarSociosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
