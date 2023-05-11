import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSchedulesComponent } from './client-schedules.component';

describe('ClientSchedulesComponent', () => {
  let component: ClientSchedulesComponent;
  let fixture: ComponentFixture<ClientSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
