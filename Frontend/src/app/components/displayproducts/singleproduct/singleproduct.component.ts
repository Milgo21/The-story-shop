import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data, Params, Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Book } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  book!:Book
  books?:Book|undefined
  // id=''
constructor(private route:ActivatedRoute, private router:Router,
  private productService:ProductService, private cartService:CartService) {
}

ngOnInit(): void {
  this.viewBook();
}

viewBook(){
  const id = (this.route.snapshot.paramMap.get('id'));
  this.productService.getOneBook(id).subscribe((books)=>{
    this.books=books
  })
  // console.log(this.books);
  
  // this.books = this.books.filter(x => x.id === this.id)
  // this.router.navigate(['id'], {relativeTo:this.route});
}

addToCart(book:Book){
  this.cartService.addToCart(book).subscribe(res=>{
    console.log(res);
    
  })
}
  // viewBook(){
  //   const id =(this.route.snapshot.paramMap.get('id'));
  //   this.productService.getOneBook(id).subscribe((books)=>{
  //     this.book=books

  //   })
  // }

  }
