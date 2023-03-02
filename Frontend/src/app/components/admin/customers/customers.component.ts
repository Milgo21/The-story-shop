import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  users:User[]=[]

  constructor( private userService:UsersService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=>{
      this.users=users
      console.log(this.users)

    })
  }

}
