import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
Books:Book[]=[]
constructor(private service:ProductService){

  this.Books = this.service.Books
}
}
