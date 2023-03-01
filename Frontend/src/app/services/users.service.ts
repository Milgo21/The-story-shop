import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,logUser } from '../interfaces/interfaces';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Users:User[] = []


  constructor(private http: HttpClient, private route:Router) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:4000/api/users/register`, user);
    // return this.http.post<User>('http://localhost:4000/users/register', user)
  }

  login(email: string, password: string): Observable<logUser> {
    return this.http.post<logUser>('http://localhost:4000/api/users/login', { email, password });
  }

  getUsers():Observable<User[]>{
    // return this.Books
    return this.http.get<User[]>('http://localhost:4000/api/users')

      }
    }


