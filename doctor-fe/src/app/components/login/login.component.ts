import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { User } from 'src/app/data/CUser';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
  // @Input() doctor: Doctor | null = null;
  loginForm!: FormGroup; 
  ui: UiService;
  formBuilder: FormBuilder;
  user: User;
  //public doctor: Doctor[];
  
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // })

  constructor(ui: UiService, formBuilder: FormBuilder, user: User){
    this.ui = ui;
    this.formBuilder = formBuilder;   
    this.user = user;
  }

  initForm () {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {    
    if(this.loginForm.valid){
      if(this.user.email && this.user.password === this.loginForm.value){
        this.ui.getUserById(this.user.id)
        .subscribe({
          next:(response) => {
            console.log(this.loginForm.value)
          }
        })
      } else {
        console.log(`error while logging in`)
      }
    }     
  }

  

  ngOnInit():void  {
    this.initForm();
  }

}
