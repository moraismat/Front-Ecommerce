import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
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

  constructor(
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public clienteService: ClienteService,
    public formBuilder: FormBuilder
  ){}


  ngOnInit(){
    this.activatedRouter.params.subscribe(params => {
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
        this.cliente.endereco.endereco_id = res.id
    })

    this.createForm()
    console.log(this.cliente)
  }

  createForm(){
    this.formCliente = this.formBuilder.group({
      nome: this.cliente.name,
      telefone: this.cliente.telefone,
      cpf: this.cliente.cpf,
      email: this.cliente.email,
      logradouro: this.cliente.endereco.logradouro,
      numero: this.cliente.endereco.numero,
      complemento: this.cliente.endereco.complemento,
      bairro: this.cliente.endereco.bairro,
      cep: this.cliente.endereco.cep,
      cidade: this.cliente.endereco.cidade,
      estado: this.cliente.endereco.estado
    })
  }

  editar(){
    this.cliente.name = this.formCliente.get('nome')?.value
    this.cliente.telefone = this.formCliente.get('telefone')?.value
    this.cliente.cpf = this.formCliente.get('cpf')?.value
    this.cliente.email = this.formCliente.get('email')?.value
    this.cliente.endereco.logradouro = this.formCliente.get('logradouro')?.value
    this.cliente.endereco.numero = this.formCliente.get('numero')?.value
    this.cliente.endereco.complemento = this.formCliente.get('complemento')?.value
    this.cliente.endereco.bairro = this.formCliente.get('bairro')?.value
    this.cliente.endereco.cep = this.formCliente.get('cep')?.value
    this.cliente.endereco.cidade = this.formCliente.get('cidade')?.value
    this.cliente.endereco.estado = this.formCliente.get('estado')?.value
    this.cliente.endereco.endereco_id = this.cliente.endereco.endereco_id

    console.log(this.cliente)
    this.clienteService.editar(this.cliente)
      .subscribe(res => {
        this.router.navigate(['/perfil', res.id])
      })
  }

  editarPerfil(){
    this.router.navigate(['/editarPerfil', this.cliente.id])
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
