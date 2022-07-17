import { Component, OnInit } from '@angular/core';
import { WeatherNotifierService } from '../weather-notifier.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})


export class HumidityComponent implements OnInit {

  humidity: string = "";

  constructor(private weatherNotifyService: WeatherNotifierService) { }

  ngOnInit(): void {
    this.weatherNotifyService.newWeatherResult.subscribe(data =>{
      this.humidity = (data as any)['current']["humidity"];
    })
  }

  
}
