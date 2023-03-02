import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Books: Book[] = []


  constructor() { }
  addNewBook(addedBook: Book) {
    this.Books.push(addedBook);
  }
}
