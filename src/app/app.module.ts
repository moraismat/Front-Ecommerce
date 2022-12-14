import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { HomeComponent } from './page/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './page/perfil/perfil.component';
import { PedidosComponent } from './page/pedidos/pedidos.component';
import { EditarPerfilComponent } from './page/editar-perfil/editar-perfil.component';
import { CartComponent } from './page/cart/cart.component';
import { PedidorealizadoComponent } from './page/pedidorealizado/pedidorealizado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PerfilComponent,
    PedidosComponent,
    EditarPerfilComponent,
    CartComponent,
    PedidorealizadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ HttpClient, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
