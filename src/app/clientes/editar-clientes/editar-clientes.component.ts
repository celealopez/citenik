import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {
  cliente:Cliente;
  
  constructor(public activatedRoute:ActivatedRoute, public clienteService:ClienteService,public router:Router) {
    this.cliente={} as Cliente;
    
   }

  ngOnInit(): void {
    this.obtenerUna();
  }



  obtenerUna(){
    this.activatedRoute.params.subscribe({
      next: params =>{
        const id = params["id"];
        this.clienteService.obtenerCliente(id).subscribe({
          next: result => {
            this.cliente = result;
          },
          error : error =>{
            alert("error al editar")
          }
        })
      }
    })
  }


  editarcliente(cliente:Cliente){
    
    console.log(cliente);
    this.clienteService.modificarCliente(cliente).subscribe({
  next: result => {
    alert("edicion exitosa");
    this.router.navigate(["/listaClientes"])
  },
  error:error =>{
    alert("error")
  }
    })
  }



}
