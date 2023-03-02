import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Books: Book[] = []


  constructor( private http: HttpClient){ }

  addNewBook(addedBook:Book){
    // this.Books.push(addedBook);
    let added = {...addedBook, recently_added:"1",featured:"1",
    is_deleted:"0"}
    // console.log(added)
    return this.http.post<Book>('http://localhost:4000/api/products', added)
  }
  getBooks():Observable<Book[]>{
    // return this.Books
    return this.http.get<Book[]>('http://localhost:4000/api/products')
    }

  getOneBook(id:string){
    return this.Books.find(x=>x.id === id) as Book
  }
  getBookByCategory(category_name:string):Book[]{
    let x = this.Books.filter(x => x.category_id === category_name)
    return x
  }
  updateBook(id:string,newBook:Book){
    let index = this.Books.findIndex(x =>x.id === id)
    this.Books[index] = newBook
  }
  // deleteBook(id:any){
  //   let index = this.Books.findIndex(x =>x.id === id)
  //   this.Books.splice(index,1)
  // }
  deleteBook(id:any):Observable<Book>{
    // return this.Books
    // console.log(id);

    return this.http.delete<Book>(`http://localhost:4000/api/products/${id}`)
    }
}
