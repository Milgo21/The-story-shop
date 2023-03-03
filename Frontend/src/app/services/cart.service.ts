import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, Cart } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Cart[]=[]
  constructor(private http:HttpClient) { }


  addToCart(book:Book){

    let token = localStorage.getItem('token')
    console.log(token);
    let headers:HttpHeaders  = new HttpHeaders({
      'authorization':'Bearer '+token
    })
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
    
  }
}
