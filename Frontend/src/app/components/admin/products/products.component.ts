import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  books:Book[]=[]

  constructor( private productService:ProductService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productService.getBooks().subscribe((books)=>{
      this.books=books
      console.log(this.books)

    })
  }

  deleteBook(id:any){
    this.productService.deleteBook(id).subscribe()
    this.books = this.books.filter(x => x.id !== id);
  }
}


