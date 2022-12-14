import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http: HttpClient) {
  }

  findAll() : Observable<any> {
      return this.http.get<any>(`${API_CONFIG.baseUrl}/categoria`)
  }
}
