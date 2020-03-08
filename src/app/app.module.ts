import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CounterService } from './counter.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CounterService ],
  providers:    [ CounterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
