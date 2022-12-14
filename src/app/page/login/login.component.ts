import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClienteService } from 'src/app/services/cliente.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = {
    cpf: '',
    senha: '',
    id: 0
  }
  formGroup!: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public clienteService: ClienteService
  ) {
    this.createForm()

  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      cpf: '123456789',
      senha: '123'
    })
  }

  entrar(){
    this.login.cpf = this.formGroup.get('cpf')?.value
    this.clienteService.login(this.login.cpf)
      .subscribe(res=> {
        this.login.id = res
    });
    console.log(this.login.id)
    if(this.login.id > 0){
      this.router.navigate(['/home', this.login.id]);
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }
}
