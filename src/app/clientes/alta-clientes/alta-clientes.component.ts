import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})


export class AltaClientesComponent implements OnInit {
  cliente: Cliente;
  private subs: Subscription;

  @Output() onAgregar = new EventEmitter<Cliente>();
  constructor(public clienteService: ClienteService) {
    this.cliente = new Cliente();
    this.subs = new Subscription();
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  agregarCliente(cliente: Cliente) {
    
    this.subs.add(this.clienteService.nuevoCliente(cliente).subscribe({
      next: (result) => {
        console.log(result)
        alert("carga exitosa");
       
      },
      error: (err) => {
        alert("error al cargar el cliente");
        console.log(err)
      },
    }));

    

    this.onAgregar.emit(cliente);
    this.cliente = new Cliente();
  }

  

  
}
