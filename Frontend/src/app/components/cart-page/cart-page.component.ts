import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cart } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cartItem:any[]=[]
  constructor( private cartService:CartService, private route:Router){}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(res=>{

      console.log(res);
      this.cartItem = res


    })
  }
  getProductDetails(){

  }
  checkout(){
    this.cartService.checkout()
  }
}
