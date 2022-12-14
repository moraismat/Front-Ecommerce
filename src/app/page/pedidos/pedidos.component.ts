import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedido: Pedido[] = []
  endereco: Endereco = {
    id: '',
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

    console.log(this.cliente.id)

    this.pedidoService.encontrarPedidos(this.cliente.id)
      .subscribe(res => {
        res.forEach((element: Pedido) => {
          this.pedido.push(element)
        });
      })

    console.log(this.pedido)
  }

}
