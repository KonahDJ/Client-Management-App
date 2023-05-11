
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientSchedulesService } from '../client-schedules.service';

import { Schedules } from 'src/modal/client-schedules';

@Component({
  selector: 'app-client-schedules',
  templateUrl: './client-schedules.component.html',
  styleUrls: ['./client-schedules.component.css']
})
export class ClientSchedulesComponent implements OnInit {

  showSchedules = true;

  schedules = this.clientScheduleService.getSchedules();

  scheduleForm = new FormGroup ( 
    {
      sid: new FormControl(0),
      name: new FormControl(''),
      company: new FormControl(''),
      project: new FormControl(''),
      meeting: new FormControl(),
    }
  );


  constructor(private clientScheduleService: ClientSchedulesService ) { }

  ngOnInit(): void { }

}
