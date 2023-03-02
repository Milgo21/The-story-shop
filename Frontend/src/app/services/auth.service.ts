import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Login } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = false
  private email = ''
  private role = ''
  private token = ''

  getEmail() {
    return this.email
  }

  getRole() {
    return this.role
  }
  // getToken() {
  //   return this.token
  // }

  setEmail(email: string) {
    this.email = email
  }
  setRole(role: string) {
    this.role = role
  }
  // setToken(token: string) {
  //   this.token = token
  // }

  getauthStatus(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 10)
    })
    return promise;
  }
  login() {
    this.isLoggedIn = true
  }
  logout() {
    this.isLoggedIn = false
  }
}
