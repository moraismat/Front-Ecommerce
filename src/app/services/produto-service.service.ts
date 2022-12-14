import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  findAllProdutos() {
    return this.http.get(`${API_CONFIG.baseUrl}/produto`);
  }
}
