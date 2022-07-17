import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherNotifierService {
  newWeatherResult: Subject<string>;
  constructor(private http: HttpClient) {
      this.newWeatherResult = new Subject();
   }


  notifyAll(data : string)
  {
    this.newWeatherResult.next(data);
  }

  public getWeather1(url: string) : Observable<string>
  {    
    return this.http.get<string>(url).pipe(tap( data =>this.newWeatherResult.next(data)) )
  }

  
}
