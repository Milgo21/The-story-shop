import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book, Cart } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Cart[]=[]
  constructor(private http:HttpClient, private router: Router) { }


  addToCart(book:Book){

    let token = localStorage.getItem('token')
    console.log(token);
    let headers:HttpHeaders  = new HttpHeaders({
      'authorization':'Bearer '+token
    })
    alert('Item has been added to cart successfully!')
    return this.http.post("http://localhost:4000/api/cartitems",{product_id:book.id,quantity:'1'},{
      headers
    })


  }
  getCartItems():Observable<any>{
    let token = localStorage.getItem('token')
    let headers:HttpHeaders  = new HttpHeaders({
      'authorization':'Bearer '+ token
    })
    return this.http.get(`http://localhost:4000/api/cartitems`,{headers})
  }

  checkout(){
    this.router.navigate(['']);
    this.cartItems = []
  }
  removeFromCart(id:number){
    return this.http.delete<any>(`https://localhost:4000/api/cartitems/${id}`)
    }

}
