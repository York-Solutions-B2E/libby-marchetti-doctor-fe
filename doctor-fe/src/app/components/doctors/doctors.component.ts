import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Doctor } from 'src/app/data/CDoctor';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, OnDestroy {
  public doctors: Doctor[];
  doctorsSubscription: Subscription;

  constructor(ui: UiService){
    this.doctors = ui.doctors;
    this.doctorsSubscription = ui
      .whenDoctorsUpdated()
      .subscribe(doctors => this.doctors = doctors)
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
}
