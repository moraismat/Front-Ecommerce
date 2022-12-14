import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Produto } from '../models/Produto';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(public storage: StorageService) {
  }

  createOrClearCart() : Cart {
      let cart: Cart = {items: []};
      this.storage.setCart(cart);
      return cart;
  }

  getCart() : Cart {
      let cart = this.storage.getCart();
      if (cart == null) {
          cart = this.createOrClearCart();
      }
      return cart;
  }

  addProduto(produto: Produto) : Cart {
      let cart = this.getCart();
      let position = cart.items.findIndex(x => x.produto.id == produto.id);
      if (position == -1) {
          cart.items.push({quantidade: 1, produto: produto});
      }
      this.storage.setCart(cart);
      return cart;
  }

  removerProduto(produto: Produto){
    let cart = this.getCart()
    let position = cart.items.findIndex(x => x.produto.id == produto.id);
    if (position != -1) {
        cart.items.splice(position, 1);
    }
    this.storage.setCart(cart);
    console.log(this.removerProduto)
    return cart;
  }

}
