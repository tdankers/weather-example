import { Component, OnInit } from '@angular/core';
import { WeatherNotifierService } from '../weather-notifier.service';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit {
  
  winddirection: string = "";
  speed: string = "";
  constructor(private weatherNotifyService: WeatherNotifierService) { }

  ngOnInit(): void {
    this.weatherNotifyService.newWeatherResult.subscribe(data =>{
      this.speed = (data as any)['current']["wind_kph"];
      this.winddirection = (data as any)['current']["wind_dir"];    
    })
  }

}
