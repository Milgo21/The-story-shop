import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = { firstname:'', lastname:'', email: '', username:'', password: '' };
  error = '';
  form!: FormGroup

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),

    })
  }
  

  submitData(): void {
    this.userService.login(this.user.email, this.user.password)
      .subscribe(
        user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['']);
        },
        error => {
          this.error = error;
        }
      );
  }
}
 


