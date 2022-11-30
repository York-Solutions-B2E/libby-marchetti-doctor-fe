import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../data/user';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // slots are used as an 8 hr day
  // 1 slot is a 1 hr appt

  // base http for user and appts
  // cuz i be lazy
  private usersURL = 'http://localhost:3000/users';
  private apptURL = 'http://localhost:3000/appointments';

  // state management
  // private to control when/what/how accessed

  // set to booleans
  // either logging in or registering
  // loading for when waiting on 'backend'
  private showRegister = false;
  private showLogin = true;
  private loading = false;
  private doctor = false;

  private userId: number | undefined;
  private username: string | undefined;  
  private appointments = [];

  constructor(
    private http: HttpClient,     
    private snackBar: MatSnackBar ) {
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      if(username !== null && password !== null){
        this.tryLogin(username, password)
        
      }
    }

  // methods for components to call for the vars
  // because they're private
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

  public startRegister(){
    this.showLogin = false;
    this.showRegister = true;
  }

  public startLogin() {
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
        // time in miliseconds boooooo
        duration: 2000
      });    
  }

  private loginValid(user: User): void {
    this.showLogin = false;
    this.userId = user.id;
    this.username = user.username;
    this.doctor = user.doctor;
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password)
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
