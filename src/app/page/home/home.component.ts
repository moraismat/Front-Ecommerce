import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { Produto } from 'src/app/models/Produto';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  produtos: Produto[];


  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public produtoService: ProdutoServiceService,
    public clienteService: ClienteService,
    public cartService: CartserviceService
  ){
    this.produtos = []
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.cliente.id = params['id']
      console.log(this.cliente.id)
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
        this.cliente.endereco.endereco_id = res.id

        console.log(res)

    })
    this.produtoService.findAllProdutos()
      .subscribe(res => {
        res.forEach((element: Produto) => {
          this.produtos.push(element)
        });
      })

    console.log(this.produtos)
  }

  addToCart(produto: Produto) {
    this.cartService.addProduto(produto);
    console.log(this.cartService.getCart())
  }

  irParaCarrinho(){
    this.router.navigate(['/cart', this.cliente.id])
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

  sair(){
    this.router.navigate(['/login'])
  }
}
