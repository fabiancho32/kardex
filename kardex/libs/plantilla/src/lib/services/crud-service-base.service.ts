/* eslint-disable @typescript-eslint/no-explicit-any*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceBaseService {

  constructor(protected http: HttpClient) { }
  
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });

  ruta = 'http://localhost:3000/';
  modelo = '';
  
  save(objeto:any){
    const url_servicio = this.ruta + this.modelo;
    return this.http
    .post<any>(url_servicio, objeto, {headers: this.headers})
    .pipe(map(data => data));
  }

  getOne(id: string){
    const url_servicio = this.ruta + this.modelo + `/${id}`;
    return this.http.get<any>(url_servicio).toPromise()
    .then((res) => (<any>res));
  }

  getAll(){
    const url_servicio = this.ruta + this.modelo;
    return this.http.get<any>(url_servicio).toPromise()
    .then((res) => (<any[]>res));
  }

  update(objeto:any){
    const id = objeto.id;
    const url_servicio = this.ruta + this.modelo + `/${id}`;
    return this.http
    .put<any>(url_servicio, objeto, {headers: this.headers})
    .pipe(map(data => data));
  }

  delete(id:string){
    const url_servicio = this.ruta + this.modelo + `/${id}`;
    return this.http
    .delete<any>(url_servicio, {headers: this.headers})
    .pipe(map(data => data));
  }
}
