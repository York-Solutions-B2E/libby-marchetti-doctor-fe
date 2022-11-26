import { Injectable } from '@angular/core';
import { User } from '../data/CUser';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  // doctor: Doctor[] = [{
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
  //  }]

  // public doctors: Doctor[] = [];
  // public doctor: Doctor | null = null;
  // doctorsSubject: Subject<Doctor[]> = new Subject();
  // doctorSubject: Subject<Doctor> = new Subject();
  http: HttpClient;
  user: User;
  constructor(http: HttpClient, user: User) { 
    this.http = http;
    this.user = user;
  }

  addUser(data:any){
    return this.http.post<any>(`http://localhost:3000/users/`, data)
  }

  getUsers(){
    return this.http.get<any>(`http://localhost:3000/users/`)
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }

  // === Was following Memos lecture
  // updatedDoctors():void {
  //   this.http
  //     .get<Doctor[]>(`http://localhost:3000/doctors`)
  //     .pipe(take(1))
  //     .subscribe(doctors => {
  //       console.log(doctors)
  //       this.doctors = doctors
  //       this.doctorsSubject.next(this.doctors)
  //     })
  // }

  // createDoctor(doctor: Doctor): void {
  //   this.http
  //     .post(`http://localhost:3000/doctors`, doctor)
  //     .subscribe(() => this.updatedDoctors())      
  // }

  // login(doctor: Doctor){
  //   this.http
  //     .post(`http://localhost:3000/doctors`, doctor)
  //     .subscribe(() => this.getDocById(doctor.id))
  // }
  
  // getDocById(id: number): void {
  //   this.http
  //     .get<Doctor>(`http://localhost:3000/doctors/${id}`)
  //     .subscribe(doctor => {
  //       console.log(doctor)
  //       this.doctor = doctor
  //       this.doctorsSubject.next(this.doctors)
  //     })
  // }

  // whenDoctorsUpdated(): Observable<Doctor[]> {
  //   return this.doctorsSubject.asObservable();
  // }

}
