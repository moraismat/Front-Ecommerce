import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  categoria: Categoria[];


  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public categoriaService: CategoriaService,
    public clienteService: ClienteService
  ){
    this.categoria = []
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.cliente.id = params['id']
    })

    this.clienteService.acharCliente(this.cliente.id)
      .subscribe(res => {
        this.cliente.id = res.id
        this.cliente.name = res.name
        this.cliente.telefone = res.telefone
        this.cliente.cpf = res.cpf
        this.cliente.email = res.email
        this.cliente.endereco.logradouro = res.endereco.logradouro
        this.cliente.endereco.numero = res.endereco.numero
        this.cliente.endereco.complemento = res.endereco.complemento
        this.cliente.endereco.bairro = res.endereco.bairro
        this.cliente.endereco.cep = res.endereco.cep
        this.cliente.endereco.cidade = res.endereco.cidade
        this.cliente.endereco.estado = res.endereco.estado
        this.cliente.endereco.id = res.id
    })
    console.log(this.cliente)

    this.categoriaService.findAll()
      .subscribe(res => {
        res.forEach((element: Categoria) => {
          this.categoria.push(element)
        });
      })

    console.log(this.categoria)
  }
}
