import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/data/CDoctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
 doctor: Doctor = {
  id: 1,
  firstName: 'doogie',
  lastName: 'houser',
  email: 'dh2docsunite.org',
  password: '12345',
  availability: [
    new Date(),
  ],
  appointments: [
    new Date(),
  ]
 }
  constructor(

  ){

  }
}
