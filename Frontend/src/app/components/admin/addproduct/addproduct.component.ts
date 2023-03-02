import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute ){}
  reactiveForm!:FormGroup
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      name: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      category_id: new FormControl(null,[Validators.required]),
      product_image_url: new FormControl(null,[Validators.required]),

    })

  }
  // addBook(){
  //   let addedBook = {...this.reactiveForm.value};
  //   this.service.addNewBook(addedBook);
  //   console.log(this.service.Books);
  // }

  addBook(): void {
    console.log(this.reactiveForm.value);

    this.productService.addNewBook(this.reactiveForm.value).subscribe(response=>{

      console.log(response);
      this.router.navigate(['admin']);


    })


    }
}
