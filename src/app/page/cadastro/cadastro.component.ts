import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
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
    public formBuilder: FormBuilder,
    public clienteService: ClienteService
  ){}

  ngOnInit(){

    this.createForm();
  }

  createForm(){
    this.formCliente = this.formBuilder.group({
      nome: '',
      telefone: '',
      cpf: '',
      email: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      estado: ''
    })
  }

  cadastrar(){
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

    this.clienteService.cadastrar(this.cliente)
        .subscribe(res => {
          this.cliente.id = res.id
          this.cliente.endereco.endereco_id = res.endereco.id
    })
    this.router.navigate(['/login'])
  }

  seguir(){
    var id = 1;
    this.router.navigate([`/home`, id])
  }

  cancelar(){
    this.router.navigate(['/login'])
  }
}
