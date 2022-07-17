import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { defer, forkJoin, Observable, zip } from 'rxjs';
import { WeatherNotifierService } from '../weather-notifier.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})

export class WeatherDisplayComponent implements OnInit {

  temperature: string = "waiting...";
  private defer1: Observable<string>;
  private defer2: Observable<string>;
  city1: string = "London";
  city2: string = "London";
  difference: number = 0;



  constructor(private http: HttpClient, private weatherNotifyService: WeatherNotifierService) { 
      
      this.defer1 = defer(() => {
          let url1 = `http://api.weatherapi.com/v1/current.json?key=3b91c403e85846b8bb0201724220807&q=${this.city1}&aqi=no`;    
          return this.http.get<string>(url1)});
      
      this.defer2 = defer(()=>{
        let url2 = `http://api.weatherapi.com/v1/current.json?key=3b91c403e85846b8bb0201724220807&q=${this.city2}&aqi=no`;   
        return this.http.get<string>(url2)});     
  }


  ngOnInit(): void {  

  }


  public getWeather1() : Observable<string>
  {
    let url1 = `http://api.weatherapi.com/v1/current.json?key=3b91c403e85846b8bb0201724220807&q=${this.city1}&aqi=no`;    
    return this.http.get<string>(url1);
  }


  public getWeather()
  {
    this.defer1.subscribe(
      data =>{
      this.temperature = (data as any)['current']["temp_c"];
      this.weatherNotifyService.notifyAll(data as string);
      }
    )
  }

  public compareWeather(){
      let observableArray = new Array<Observable<string>>();
      observableArray.push(this.defer1);
      observableArray.push(this.defer2);
      forkJoin(observableArray).subscribe( result =>
        { 
          let tmp1 =(result[0] as any)['current']["temp_c"];
          let tmp2 =(result[1] as any)['current']["temp_c"];
          this.difference = tmp1 - tmp2;

        }

      )

  }

}
