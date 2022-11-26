import { Component } from '@angular/core';

import { User } from 'src/app/data/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user: User = new User(0,'','','','','',null,null)
  api: ApiService;

  roles = ['Select...','Patient', 'Doctor']

  constructor(api: ApiService){
    this.api = api;
  }

  setRole(role: string){
    this.user.role = role.toLowerCase()
  }

  setFirstName(firstName: string): void {
    this.user.firstName = firstName.toLowerCase();
  }

  setLastName(lastName: string): void {
    this.user.lastName = lastName.toLowerCase();
  }

  setEmail(email: string): void {
    this.user.email = email;
  }

  setPassword(password: string): void {
    this.user.password = password;
  }

  register(): void {
    this.api.addUser({
      ...this.user,
      id: Math.random()
    })
  }
}
