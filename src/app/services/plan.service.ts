import { Injectable } from '@angular/core';
import { Plan } from '../model/plan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  listaPlanes: Plan[];
  uri: string = 'https://citenik-nodocker.azurewebsites.net/api/planes';
  constructor(public http: HttpClient) {
   this.listaPlanes = [];
  }

  getPlanes(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.uri);
  }

  nuevoPlan(plan: Plan): Observable<any>{
    return this.http.post(this.uri,plan,{
      headers: { 'Content-Type': 'application/json' },
    })
  }
  obtenerPlan(id: string): Observable<Plan>{
    return this.http.get<Plan>(`${this.uri}/${id}`);
  }
  modificarPlan(plan: Plan):Observable<Plan>{
    return this.http.put<Plan>(`${this.uri}/${plan.id}`,plan);
  }
  eliminarPlan(id: string){
    return this.http.delete(`${this.uri}/${id}`)
  }
}
