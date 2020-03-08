import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable()
export class CounterService implements OnInit, OnDestroy {
  intervalId = 0;

  message = '';
  counter = 100;

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
    this.counter = 100;
    this.intervalId = window.setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0) {
        window.clearInterval(this.intervalId);
      }
    }, 1000);
  }
}