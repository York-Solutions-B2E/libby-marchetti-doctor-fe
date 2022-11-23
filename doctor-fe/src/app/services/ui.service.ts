import { Injectable } from '@angular/core';
import { Doctor } from '../data/CDoctor';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  doctor: Doctor[] = [{
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
   }]

  public doctors: Doctor[] = [];
  doctorSubject: Subject<Doctor[]> = new Subject();
  http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  updatedDoctors():void {
    this.http
      .get<Doctor[]>(`http://localhost:3000/doctors`)
      .pipe(take(1))
      .subscribe(doctors => {
        console.log(doctors)
        this.doctors = doctors
        this.doctorSubject.next(this.doctors)
      })
  }

  createDoctor(doctor: Doctor): void {
    this.http
      .post(`http://localhost:3000/doctors`, doctor)
      .subscribe(() => this.updatedDoctors())      
  }

  getDocById(id: number): void {
    this.http
      .get<Doctor>(`http://localhost:3000/doctors/${id}`)
      .subscribe(doctor => {
        console.log(doctor)
      })
  }

  whenDoctorsUpdated(): Observable<Doctor[]> {
    return this.doctorSubject.asObservable();
  }

}
