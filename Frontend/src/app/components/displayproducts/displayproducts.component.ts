import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-displayproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {
  books:Book[]=[]

  constructor( private productService:ProductService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productService.getBooks().subscribe((books)=>{
      this.books=books
      console.log(this.books)

    })
  }

  viewBook(id:string){

  }


  }
