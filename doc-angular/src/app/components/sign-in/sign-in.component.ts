import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  api: ApiService;
  fb: FormBuilder;
  loginForm!: FormGroup;
  http: HttpClient
  // user: User;
  


  constructor(api: ApiService, fb: FormBuilder, http: HttpClient){
    this.api = api;
    this.fb = fb;
    this.http = http;
    
  }

  ngOnInit(): void {
    this.initLogin();
  }
  // add email validator
  // add minlength and pattern validator
  initLogin(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  // i know theres a better way!!!
  onSubmit(){
    this.http.get<User[]>(`http://localhost:3000/users`)
    .subscribe(res => {
      const user = res.find((u:any) => {
        return u.email === this.loginForm.value.email &&
        u.password === this.loginForm.value.password
      })
      if(user){
        console.log(user)
      }
    })
  }
  
}
