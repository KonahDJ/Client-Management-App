import { Injectable } from '@angular/core';
import { Clients } from 'src/modal/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Clients[] = [
    new Clients(101, 'John Onsen', 'The Onsen Company', 'johnonsen@example.com', '117-117-1117'),
    new Clients(201, 'Nigel Uno', 'The Ones Organization', 'nigeluno@example.com', '111-111-1111'),
    new Clients(301, 'Nathan Drake', 'Uncharted Fortune Company', 'nathandrake@example.com', '777-777-7777'),
  ];

  getClients() {
    return this.clients;
  }
  

  constructor() { }
}
