import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public api: ApiService){}

  username = '';
  password = '';
  doctor = false;

  // public user: User = new User(3,'','',false)

  // updateUN(username: string):void{
  //   this.user.username = username
  // }

  // updatePW(password:string): void {
  //   this.user.password = password
  // }

  // updateDC(doctor: boolean): void {
  //   this.user.doctor = doctor
  // }

  // onReg(): void {
  //   this.api.addUser({
  //     ...this.user
  //   })
  // }

}
