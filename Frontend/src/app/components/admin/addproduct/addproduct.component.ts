import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  constructor(private service:ProductService){}
  reactiveForm!:FormGroup
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      booktitle: new FormControl(null,[Validators.required]),
      author: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      image: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required])
    })
  }
  addBook(){
    let addedBook = {...this.reactiveForm.value};
    this.service.addNewBook(addedBook);
    console.log(this.service.Books);
  }
}
