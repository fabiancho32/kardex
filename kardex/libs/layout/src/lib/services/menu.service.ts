import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: Observable<any>;
  menu: Observable<any>;

  constructor(private http: HttpClient) {}

  getMenu (menuPath: string) {
    return this.http.get<any>(menuPath).toPromise()
      .then(res=> <MenuItem[]>res.data)
      .then(data => {return data;});
}

}