import { Component } from '@angular/core';
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
    public clienteService: ClienteService
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
        this.cliente.endereco.id = res.id
    })

    console.log(this.cliente)
  }
}
