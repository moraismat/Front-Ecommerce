import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { PedidoAtual } from '../models/PedidoAtual';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  constructor(
    public http: HttpClient
  ) {}

  encontrarPedidos(id: string): Observable<any>{
    return this.http.get<Pedido>(`http://localhost:8080/pedido/cliente/${id}`);
  }

  enviarPedidos(obj: PedidoAtual): Observable<any>{
    return this.http.post<any>('http://localhost:8080/pedido/create',JSON.stringify(obj), this.httpOptions)
  }
}
