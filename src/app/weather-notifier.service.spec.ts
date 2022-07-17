import { TestBed } from '@angular/core/testing';

import { WeatherNotifierService } from './weather-notifier.service';

describe('WeatherNotifierService', () => {
  let service: WeatherNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
