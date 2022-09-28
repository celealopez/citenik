import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  todas: any;
  personaEncontrada: any;
 
  private subs: Subscription;

  constructor(public clienteService: ClienteService,public router:Router) {
    this.subs = new Subscription();
   
  }
 

  ngOnInit(): void {
    this.subs.add(
      this.clienteService.getClientes().subscribe({
        next: (result) => {
          
          this.clienteService.listaClientes = result;
        },
        error: () => {
          alert('error en la peticion');
        },
      })
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  borrarPersona(cliente: Cliente) {
    if (confirm('esta seguro de borrar')) {
      this.subs.add(
        this.clienteService.eliminarCliente(cliente.id).subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (err) => {
            console.log(err.status);
          },
        })
      );
    }
  }

  editar(id:string){
    
    this.router.navigate([`editar/${id}`]);
   
  }



}

