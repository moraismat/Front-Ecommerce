import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    public http: HttpClient
  ) {}

  encontrarPedidos(id: string): Observable<any>{
    return this.http.get<Pedido>(`http://localhost:8080/pedido/cliente/${id}`);
  }
}
