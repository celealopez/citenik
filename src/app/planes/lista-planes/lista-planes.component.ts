import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Plan } from '../../model/plan';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styleUrls: ['./lista-planes.component.css']
})
export class ListaPlanesComponent implements OnInit, OnDestroy {
  public listaPlanes:Plan[];
  todosplanes:any;
  planElegido:any;
  private subs:Subscription;

  constructor(public planService: PlanService,public router : Router) {
    this.subs=new Subscription()
    this.listaPlanes=[];
  }

  ngOnInit(): void {
    this.subs.add(
      this.planService.getPlanes().subscribe({
        next:(result)=>{
          this.listaPlanes=result;
          console.log(result)
        },
        error:()=>{
          console.log(`Error al obtener el listado de planes`)
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  borrarPlan(plan: Plan) {
    if (confirm('esta seguro de borrar el plan')) {
      this.subs.add(
        this.planService.eliminarPlan(plan.id).subscribe({
          next: (result) => {
            alert('plan deshabilitado');
            this.router.navigate(['listaPlanes']);
          },
          error: (err) => {
            console.log(err.status);
          },
        })
      );
    }
  }


  editar(id:string){
    
    this.router.navigate([`editarPlanes/${id}`]);
   
  }
}