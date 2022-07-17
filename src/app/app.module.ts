import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WindComponent } from './wind/wind.component';
import { HumidityComponent } from './humidity/humidity.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WindComponent,
    HumidityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
