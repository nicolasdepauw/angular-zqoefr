import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:    [ CounterService ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
