import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),

      password: new FormControl(null, [Validators.required]),
      confirmpassword: new FormControl(null, [Validators.required]),

    })
  }
  submitData() {
    console.log(this.form);
  }


}

