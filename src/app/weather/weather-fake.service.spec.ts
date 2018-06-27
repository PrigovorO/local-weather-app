import {inject, TestBed} from '@angular/core/testing';

import {WeatherFakeService} from './weather-fake.service';

describe('WeatherFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherFakeService]
    });
  });

  it('should be created', inject([WeatherFakeService], (service: WeatherFakeService) => {
    expect(service).toBeTruthy();
  }));
});
