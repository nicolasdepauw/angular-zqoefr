import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  counter: CounterService;

  constructor(private counterService: CounterService) {
    this.counter = counterService;
    this.initializeGame();    
  }
  initializeGame() {
    this.noOfTries = 10;
    this.original = Math.floor(Math.random() * 100 + 1);
    this.guess = null;
    this.deviation = null;
    this.counter.start();
  }
  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries - 1;
    if (this.noOfTries===0 || this.deviation===0)
    {
      this.counter.stop();
    }
  }
}


