import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = { email: '',phone: '', password: '' };
  error = '';
  form!: FormGroup

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])

    })
  }

  submitData(): void {
    console.log(this.form.value);

    this.userService.register(this.form.value).subscribe(response=>{

      console.log(response);
      this.router.navigate(['']);


    })


    }

  }

    // this.userService.register(this.form.value).subscribe(response=>{
    //   user => {
    //     localStorage.setItem('currentUser', JSON.stringify(user));
        // this.router.navigate(['']);
    //   },
    //   error => {
    //     this.error = error;
    //   }
    // )

