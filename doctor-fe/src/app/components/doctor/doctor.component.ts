import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/data/CDoctor';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  @Input() doctor: Doctor | null = null;
  private ui: UiService;

 constructor(ui: UiService ){
    this.ui = ui;
  }

//  ui: UiService;

//  doctor: Doctor = {
//   id: 1,
//   firstName: 'doogie',
//   lastName: 'houser',
//   email: 'dh2docsunite.org',
//   password: '12345',
//   availability: [
//     new Date(),
//   ],
//   appointments: [
//     new Date(),
//   ]
//  }
  
}
