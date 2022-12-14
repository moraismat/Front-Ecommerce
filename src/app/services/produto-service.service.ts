import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  findAllProdutos(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}/produto`);
  }
}
