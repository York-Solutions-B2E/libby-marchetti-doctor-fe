import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/data/CDoctor';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
  ui: UiService;

  constructor(ui: UiService, ){
    this.ui = ui;
    
  }

  // login():void {
  //   //console.log(`login clicked`)
  //   if((this.doctor.email === doctor.email) && 
  //   (this.doctor.password && doctor.password))
  // };

  register(): void {
    console.log(`register clicked`)
  };

}
