import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {  User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {email: '', password: '', phone:''};
  error = '';
  form!: FormGroup

  constructor(private router: Router, private userService: UsersService, private auth:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])

    })
  }


  submitData(): void {
    // this.userService.login(this.form.value.email,this.form.value.password);
    console.log(this.form)
    this.userService.login(this.form.value)
      .subscribe(
        res => {
          if(res){
            const {user,token} = res;
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token',token)
            this.router.navigate(['']);
          }
        },
        error => {
          this.error = error;
        }
      );
  }
  // submitData2(): void {
  //   console.log(this.form.value);

  //   this.userService.register(this.form.value).subscribe(response=>{

  //     console.log(response);
  //     this.router.navigate(['']);


  //   })


  //   }
}



