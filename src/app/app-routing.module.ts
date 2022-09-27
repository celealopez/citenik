import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPlanesComponent } from './planes/lista-planes/lista-planes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { LoginComponent } from './login/login.component';
import { AltaClientesComponent } from './clientes/alta-clientes/alta-clientes.component';
import { AltaPlanesComponent } from './planes/alta-planes/alta-planes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'nuevoCliente', component: AltaClientesComponent },
  { path: 'nuevoPlan', component: AltaPlanesComponent},
  { path: 'listaPlanes', component: ListaPlanesComponent },
  { path: 'listaClientes', component: ListaClientesComponent },
  { path: 'editarClientes/:id', component: EditarClientesComponent },
  { path: 'editarPlanes/:id', component: EditarPlanesComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
