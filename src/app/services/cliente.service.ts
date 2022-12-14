import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    public http: HttpClient
  ) { }

  cadastrar(obj: Cliente): Observable<any>{
    return this.http.post<any>('http://localhost:8080/cliente/create', JSON.stringify(obj), this.httpOptions)
  }

  acharCliente(id: string): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/cliente/${id}`)
  }

  login(cpf: string): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/cliente/cpf/${cpf}`)
  }

  editar(cliente: Cliente): Observable<any> {
    return this.http.put<any>('http://localhost:8080/cliente/update', JSON.stringify(cliente), this.httpOptions)
  }
}
