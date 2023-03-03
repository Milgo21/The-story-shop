import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

@Component({
  selector: 'app-displayproducts',
  standalone: true,
  imports: [CommonModule, RouterModule, SingleproductComponent],
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {
  books:Book[]=[]

  constructor( private productService:ProductService, private router:Router, private route:ActivatedRoute,private cart:CartService){}

  ngOnInit(): void {
    this.productService.getBooks().subscribe((books)=>{
      this.books=books
      console.log(this.books)

    })
  }
  viewBook(id:any){
    this.productService.getOneBook(id).subscribe()
    let filteredBook = this.books.filter(x => x.id === id)
    this.productService.selectedBook(filteredBook);
    // filteredBook = this.productService.singleBook
    // this.productService.singleBook = filteredBook
    // console.log(filteredBook);
    // this.router.navigate(['id',filteredBook[0].id ], {relativeTo:this.route});
    // this.router.navigate([filteredBook[0].id])
  }


  addToCart(book:Book){
    this.cart.addToCart(book).subscribe(res=>{
      console.log(res);

    })
  }


  }
