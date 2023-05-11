import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSchedulesComponent } from './client-schedules/client-schedules.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'clients', component: ClientsComponent},
  {path:'client-schedules', component: ClientSchedulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
