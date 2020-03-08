import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable()
export class CounterService implements OnInit, OnDestroy {
  intervalId = 0;

  message = '';
  counter = 11;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.counter} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.counter < 0) { this.counter = 10; } // reset
        this.message = `T-${this.counter} seconds and counting`;
      }
    }, 1000);
  }
}