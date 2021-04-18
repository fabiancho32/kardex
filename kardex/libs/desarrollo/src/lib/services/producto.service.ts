import { map } from 'rxjs/operators';
import { Producto } from './../models/producto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  getProductos() {
    const url_productos = 'http://localhost:3000/api/productos';
    return this.http
      .get<any>(url_productos)
      .toPromise()
      .then((res) => <Producto[]>res);
  }
  saveProducto(producto: Producto) {
    const url_producto = 'http://localhost:3000/api/productos';
    return this.http
      .post<Producto>(url_producto, producto, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  updateProducto(producto: Producto) {
    const codigo = producto.id;
    const url_productos = `http://localhost:3000/api/productos/${codigo}`;
    return this.http
      .put<Producto>(url_productos, producto, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  deleteProducto(codigo: number) {
    const url_productos = `http://localhost:3000/api/productos/${codigo}`;
    return this.http
      .delete<Producto>(url_productos, { headers: this.headers })
      .pipe(map((data) => data));
  }
}
