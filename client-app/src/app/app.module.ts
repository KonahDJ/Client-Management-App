import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientSchedulesComponent } from './client-schedules/client-schedules.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientSchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
