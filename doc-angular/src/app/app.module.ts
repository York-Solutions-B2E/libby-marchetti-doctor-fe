import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


import { RegisterComponent } from './components/register/register.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { PatientComponent } from './components/patient/patient.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { BookedAppointmentComponent } from './components/booked-appointment/booked-appointment.component';

@NgModule({
  declarations: [
    AppComponent,    
    RegisterComponent,   
    DoctorsComponent,
    HeaderComponent,
    LoginComponent,
    AppointmentComponent,
    MakeAppointmentComponent,
    PatientComponent,
    AvailabilityComponent,
    BookedAppointmentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
