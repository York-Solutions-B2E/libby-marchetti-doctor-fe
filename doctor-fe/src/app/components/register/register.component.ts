import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Doctor } from '../../data/CDoctor';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  doctor: Doctor = new Doctor(2, '','','','',null,null)
  ui: UiService;

  // maybe once i can set up a register for doc and patient??
  // registerForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  constructor(ui: UiService){
    this.ui = ui;
  }

  register(): void {
    console.log(this.doctor)
    this.ui.createDoctor({
      ...this.doctor,
      id: Math.random(),
      appointments: null,
      availability: null      
    })
  };

  login():void {
    console.log(`login clicked`)
  };

  updateFirstName(firstName: string): void {
    this.doctor.firstName = firstName;
  }

  updateLastName(lastName: string): void {
    this.doctor.lastName = lastName;
  }

  updateEmail(email: string): void {
    this.doctor.email = email;
  }

  updatePassword(password: string): void{
    this.doctor.password = password;
  }
}
