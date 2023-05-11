import { Injectable } from '@angular/core';
import { Schedules } from 'src/modal/client-schedules';

@Injectable({
  providedIn: 'root'
})
export class ClientSchedulesService {

  schedules: Schedules[] = [
    new Schedules(1, 'Nigel Uno', 'The Ones Organization', 'The #1 Project', 'May 20, 2023'),
    new Schedules(2, 'John Onsen', 'The Onsen Company', 'The #1 Project', 'June 10, 2023'),
  ];

  getSchedules() {
    return this.schedules;
  }

  constructor() { }
}
