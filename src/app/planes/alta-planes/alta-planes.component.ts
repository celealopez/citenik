import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plan } from '../../model/plan';
import { PlanService } from '../../services/plan.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-planes',
  templateUrl: './alta-planes.component.html',
  styleUrls: ['./alta-planes.component.css']
})
export class AltaPlanesComponent implements OnInit {
  plan : Plan;
  private subs : Subscription;
  @Output() onAgregar = new EventEmitter<Plan>();
  constructor(public planService:PlanService,public router:Router) {
      this.plan = new Plan()
      this.subs = new Subscription()
   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  agregarPlan(plan: Plan) {
    
    this.subs.add(this.planService.nuevoPlan(plan).subscribe({
      next: (result) => {
        console.log(result)
        alert("carga exitosa");
        this.router.navigate(["/listaPlanes"])
      },
      error: (err) => {
        alert("error al cargar el plan");
        console.log(err)
      },
    }));


  }
}
