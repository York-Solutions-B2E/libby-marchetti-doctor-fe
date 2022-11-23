import { Component } from '@angular/core';
import { Doctor } from '../data/CDoctor';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  doctor: Doctor = new Doctor(2, '', '', '', '', null, null);
  ui: UiService;

  constructor(ui: UiService){
    this.ui = ui;
  }

  register(): void {
    // console.log(`register clicked`)
    this.ui.createDoctor({
      ...this.doctor,
      id: Math.random(),      
    })
  };

  login():void {
    console.log(`login clicked`)
  };
}
