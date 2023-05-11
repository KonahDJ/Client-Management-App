import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from '../clients.service';

import { Clients } from 'src/modal/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  showClients = true;

  clients = this.clientService.getClients();

  clientForm = new FormGroup( 
    {
      cid: new FormControl(0),
      name: new FormControl(''),
      company: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    }
  );


  constructor(private clientService: ClientsService) { }

  ngOnInit(): void { }

}
