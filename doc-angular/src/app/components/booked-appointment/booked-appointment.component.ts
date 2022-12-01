import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/data/appointment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booked-appointment',
  templateUrl: './booked-appointment.component.html',
  styleUrls: ['./booked-appointment.component.css']
})
export class BookedAppointmentComponent {
  @Input() appointment: Appointment | undefined
  constructor(public api: ApiService){}
}
