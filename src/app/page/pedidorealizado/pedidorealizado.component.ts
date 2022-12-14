import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidorealizado',
  templateUrl: './pedidorealizado.component.html',
  styleUrls: ['./pedidorealizado.component.css']
})
export class PedidorealizadoComponent {
  endereco: Endereco = {
    endereco_id: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: ''
  }

  cliente: Cliente = {
    id: '',
    name: '',
    telefone: '',
    cpf: '',
    email: '',
    endereco: this.endereco
  }

  constructor(
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public pedidoService: PedidosService
  ){}

  ngOnInit(){
    this.activatedRouter.params
      .subscribe(params => {
        this.cliente.id = params['id']
      })
  }

  irParaPedidos(){
    this.router.navigate(['/pedidos', this.cliente.id])
  }

  irParaHome() {
    this.router.navigate(['/home', this.cliente.id])
  }

  irParaPerfil(){
    this.router.navigate(['/perfil', this.cliente.id])
  }

  irParaEditar(){
    this.router.navigate(['/editarPerfil', this.cliente.id])
  }
  sair(){
    this.router.navigate(['/login'])
  }
}
