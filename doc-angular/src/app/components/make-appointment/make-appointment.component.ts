import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent {
  public date: Date = new Date();
  public slot: number = 0;
  public slots = [1,2,3,4,5,6,7,8]
  constructor(public api: ApiService){}
}
