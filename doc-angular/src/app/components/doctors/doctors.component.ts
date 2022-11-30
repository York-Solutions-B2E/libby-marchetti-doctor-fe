import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/data/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  @Input() user: User | null = null;
  api: ApiService;
  fb: FormBuilder;
  dateForm!: FormGroup

  constructor(api: ApiService, fb: FormBuilder){
    this.api = api;
    this.fb = fb;
  }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      date: []
    })
  }

  showDate(): void {
    console.log(this.dateForm.value.date)
  }

}
