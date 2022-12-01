import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/data/appointment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {
  @Input() appointment: Appointment | undefined
  constructor(public api: ApiService){}
}
