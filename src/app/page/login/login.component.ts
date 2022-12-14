import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    id: ''
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
      cpf: '',
      senha: ''
    })
  }

  entrar(){
    this.login.cpf = this.formGroup.get('cpf')?.value
    this.clienteService.login(this.login.cpf)
      .subscribe(res => {
        this.login.id = res.id
        //console.log(this.login.id)
      })
    this.router.navigate(['/home']);
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
