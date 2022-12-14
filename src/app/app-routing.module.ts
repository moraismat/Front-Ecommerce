import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { EditarPerfilComponent } from './page/editar-perfil/editar-perfil.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PedidosComponent } from './page/pedidos/pedidos.component';
import { PerfilComponent } from './page/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login' , component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'home/:id', component: HomeComponent},
  { path: 'perfil/:id', component: PerfilComponent},
  { path: 'editarPerfil/:id', component: EditarPerfilComponent},
  { path: 'pedidos/:id', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
