import {Injectable} from '@angular/core';
import {IWeatherService} from './iweather-service';
import {Observable, of} from 'rxjs';
import {ICurrentWeather} from '../icurrent-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService {

  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  };

  public getCurrentWeather(city: string, country: string):
    Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
