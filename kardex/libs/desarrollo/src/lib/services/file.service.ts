import { Archivo } from './../models/archivo.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  URL = 'http://127.0.0.1/kardex/';
  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  uploadFile(archivo: Archivo) {
    return this.http.post(`${this.URL}upload.php`, JSON.stringify(archivo));
  }
}
