import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, take } from 'rxjs';

import { User } from '../data/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[] = [];
  usersSubject: Subject<User[]> = new Subject();
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.getUsers();
   }

   getUsers(): void {
    this.http
    .get<User[]>(`http://localhost:3000/users`)
    .pipe(take(1))
    .subscribe(users => {
      console.log(users)
      this.users = users
      this.usersSubject.next(this.users)
    })
   }

   addUser(user: User): void {
    this.http
    .post(`http://localhost:3000/users`, user)
    .pipe(take(1))
    .subscribe(() => this.getUsers())
   }
}
