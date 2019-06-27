import { TestBed } from '@angular/core/testing';

import { SensorsService } from './sensor.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorsService = TestBed.get(SensorsService);
    expect(service).toBeTruthy();
  });
});
