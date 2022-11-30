import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../data/user';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Appointment } from '../data/appointment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // slots are used as an 8 hr day
  // 1 slot is a 1 hr appt

  // base http for user and appts
  
  private usersURL = 'http://localhost:3000/users';
  private apptURL = 'http://localhost:3000/appointments';
  
  private showRegister = false;
  private showLogin = true;
  private loading = false;
  private doctor = false;
  private newAppt = false;

  private userId: number | undefined;
  private username: string | undefined;  
  private appointments: Appointment[] = [];

  constructor(
    private http: HttpClient,     
    private snackBar: MatSnackBar ) {
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      if(username !== null && password !== null){
        this.tryLogin(username, password)
        
      }
    }

  public getShowRegister(): boolean {
    return this.showRegister;
  }

  public getShowLogin(): boolean {
    return this.showLogin;
  }

  public getLoading(): boolean {
    return this.loading;
  }

  public getUsername(): string | undefined {
    return this.username;
  }

  public getAppointments(): Appointment[] {
    return this.appointments;
  }

  public getDoctor(): boolean {
    return this.userId !== undefined && this.doctor;
  }

  public getNewAppt(): boolean {
    return this.newAppt;
  }

  public startNewAppt(): void {
    this.newAppt = true;
  }

  public cancelNewAppt(): void {
    this.newAppt = false;
  }

  public schedNewAppt(date: Date, slot: number): void {
    
    slot--
    if(slot < 0 || slot > 8 || slot % 1 !== 0){
      this.showError(`Slot is invalid`)
      return
    }
    if(date < new Date()){
      this.showError(`Date is invalid`)
      return
    }

    if (this.userId === undefined){
      this.showError(`You're not logged in`)
      return
    }

    this.newAppt = false;
    this.http.post(`${this.apptURL}`, new Appointment(
      null,
      this.userId,
      null,
      date,
      slot)
    )
    .pipe(take(1))
    .subscribe({
      next: ()=> {
        this.loadingAppts();
      },
      error: err => {
        this.showError(`Oops, something went wrong`)
      }
    })
  }

  

  public startRegister(): void {
    this.showLogin = false;
    this.showRegister = true;
  }

  public startLogin(): void {
    this.showLogin = true;
    this.showRegister = false;
  }

  // === HTTP METHODS ===
  public getAllUsers(): void {
    this.http
    .get(this.usersURL)
  }

  private showError(message: string): void {    
      this.snackBar.open(message, undefined, {        
        duration: 2000
      });    
  }

  private loginValid(user: User): void {
    this.showLogin = false;
    this.userId = user.id;
    this.username = user.username;
    this.doctor = user.doctor;
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
    this.loadingAppts();
  }

  public logout(): void {
    this.showRegister = false;
    this.showLogin = true;
    this.loading = false;
    this.doctor = false;
    this.userId = undefined;
    this.username = undefined;  
    this.appointments = [];
    localStorage.clear();
  }

  private loadingAppts(): void {
    this.loading = true;
    if (this.doctor){
    this.http.get<Appointment[]>(`${this.apptURL}?doctorId=${this.userId}`)
    .pipe(take(1))
    .subscribe({
      next: appointments => {
        console.log(appointments); 
        this.appointments = appointments;
        this.loading = false;
      },
      error: () => {
        this.showError(`Oops somethin wrong`);
        this.loading = false;
      }
    })
    } else {
      this.showError(`Patient appts not implemented`);
      this.loading = false;

    }
  }

  public tryLogin(username: string, password: string) : void {
    // filters through users[] to find a match
    this.http.get<User[]>(`${this.usersURL}?username=${username}&password=${password}`)
    // do once and unsubscribe
    .pipe(take(1))
    .subscribe({
      next: users => {
        if(users.length !==1){
          this.showError('Invalid username and/or password');
          return;
        }
        this.loginValid(users[0]);

      },      
      error: err => {
        this.showError('Oops something went wrong');
      }
    })
  }

  public addUser(user: User): void {
    this.http
    .post<User>(`${this.usersURL}`, user)
    .pipe(take(1))
    .subscribe(() => {
      console.log(user)
    })

  }

      
    
  

  


}
