import { Injectable } from '@angular/core';
import { Schedules } from 'src/modal/client-schedules';

@Injectable({
  providedIn: 'root'
})
export class ClientSchedulesService {

  schedules: Schedules[] = [
    new Schedules(1, 'Nigel Uno', 'The Ones Organization', 'The #1 Project', '2023-05-20 12:30:00'),
    new Schedules(2, 'John Onsen', 'The Onsen Company', 'The #1 Project', '2023-05-25 10:00:00'),
  ];

  getSchedules() {
    return this.schedules;
  }

  constructor() { }
}
