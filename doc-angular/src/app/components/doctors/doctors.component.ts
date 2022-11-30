import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/data/user';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent{
  
  constructor(public api: ApiService){}

  

  

}
