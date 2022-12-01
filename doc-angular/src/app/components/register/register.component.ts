import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public api: ApiService){}

  public username = '';
  public password = ''; 

}
