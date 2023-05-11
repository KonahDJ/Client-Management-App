import { TestBed } from '@angular/core/testing';

import { ClientSchedulesService } from './client-schedules.service';

describe('ClientSchedulesService', () => {
  let service: ClientSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
