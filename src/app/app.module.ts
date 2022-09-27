import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClientesComponent } from './clientes/alta-clientes/alta-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { AltaPlanesComponent } from './planes/alta-planes/alta-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { ListaPlanesComponent } from './planes/lista-planes/lista-planes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AltaClientesComponent,
    EditarClientesComponent,
    ListaClientesComponent,
    AltaPlanesComponent,
    EditarPlanesComponent,
    ListaPlanesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
