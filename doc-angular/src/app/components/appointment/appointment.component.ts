import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/data/appointment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  @Input() appointment: Appointment | undefined
  constructor(public api: ApiService){}
}
