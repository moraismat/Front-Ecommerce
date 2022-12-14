import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ItemPedido } from 'src/app/models/ItemPedido';
import { Pagamento } from 'src/app/models/pagamento';
import { Pedido } from 'src/app/models/pedido';
import { PedidoAtual } from 'src/app/models/PedidoAtual';
import { Produto } from 'src/app/models/Produto';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  formCliente!: FormGroup;

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
  items: CartItem[] = [];

  pagamento: Pagamento = {
    id: '',
    estadoPagamento: '',
    dtPagamento: '',
    dtVencimento: '',
    numeroParcelas: ''
  }

  itemPedido: ItemPedido[] = []

  pedidoAtual: PedidoAtual = {
    cliente_id: '',
    pagamentoRequest: this.pagamento,
    lstItemPedidoRequest: this.itemPedido
   }


  constructor(
    public router: Router,
    public cartService: CartserviceService,
    public produtoService: ProdutoServiceService,
    public clienteService: ClienteService,
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public pedidoService: PedidosService
    ) {
  }

  ngOnInit() {
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

    let cart = this.cartService.getCart();
    cart.items.forEach(element => {
      this.items.push(element)
    });
    console.log(this.items)

    this.formCliente = this.formBuilder.group({
      numeroCartao: new FormControl(),
      numeroParcelas: new FormControl(),
    })
  }

  enviarPedido(){
    var dateObj = new Date(Date.now());
    let date = dateObj.toLocaleDateString()
    this.pagamento.dtPagamento = date.toString();
    this.pagamento.dtVencimento = date.toString();
    this.pagamento.estadoPagamento = 'PAGO';
    this.pagamento.numeroParcelas = this.formCliente.get('numeroParcelas')?.value

    this.pedidoAtual.cliente_id = this.cliente.id
    this.pedidoAtual.pagamentoRequest = this.pagamento
    this.items.forEach(element => {
      let itemP: ItemPedido = {
        desconto: 0.0,
        preco: element.produto.price,
        quantidade: 1,
        produto_id: element.produto.id
      }
      this.pedidoAtual.lstItemPedidoRequest.push(itemP)
    })
    console.log(this.pedidoAtual)

    this.pedidoService.enviarPedidos(this.pedidoAtual)
      .subscribe(res => {
        console.log(res)
      })
    this.router.navigate(['/pedidoRealizado', this.cliente.id])
  }

  removerItem(produto: Produto){
    this.cartService.removerProduto(produto);
    this.irParaHome()
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
    this.cartService.createOrClearCart();
    this.router.navigate(['/login'])
  }
}
