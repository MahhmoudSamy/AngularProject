import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];

  constructor(private prod  uctService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  removeFromCart(product) {
    this.productService.removeFromCart(product);
  }

  checkout() {
    this.productService.checkout();
  }
}

