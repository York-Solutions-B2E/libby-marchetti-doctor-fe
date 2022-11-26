import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../data/CUser';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  // must delcare FormGroup outside consturctor
  // Not sure why the !...
  registerForm!: FormGroup;
  // doctor: Doctor = new Doctor(2, '','','','',null,null)
  ui: UiService;
  formBuilder: FormBuilder;

  // maybe once i can set up a register for doc and patient??
  // registerForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  constructor(ui: UiService, formBuilder: FormBuilder){
    this.ui = ui;
    this.formBuilder = formBuilder;
    // this.registerForm = registerForm;
    // this.formBuilder = formBuilder;
    
    
  }

  ngOnInit(): void {
    this.initRegister();
    
  }

  initRegister(){
    this.registerForm = this.formBuilder.group({
      role: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
    })
  }

  register(){    
    if(this.registerForm.valid) {
      this.ui.addUser(this.registerForm.value)
      .subscribe({
        next:(response) => {
          console.log(this.registerForm.value)
        }       
      })
    } else {
      console.log(`error while adding user`)
    }          
  }
  
  login():void {
    console.log(`login clicked`)
  };

  // updateFirstName(firstName: string): void {
  //   this.doctor.firstName = firstName;
  // }

  // updateLastName(lastName: string): void {
  //   this.doctor.lastName = lastName;
  // }

  // updateEmail(email: string): void {
  //   this.doctor.email = email;
  // }

  // updatePassword(password: string): void{
  //   this.doctor.password = password;
  // }
}
