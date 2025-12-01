"use strict";

class Clock {
  constructor(targetElement, startTime) {
    this.element = document.querySelector(targetElement);
    this.timer = startTime;
    this.timerId = setInterval(this.updateTimer, 1000);
  }

  updateTimer = () => {
    const minutes = Math.floor(this.timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (this.timer % 60).toString().padStart(2, "0");

    this.element.textContent = `${minutes}:${seconds}`;

    if (this.timer <= 0) {
      clearInterval(this.timerId);
      return;
    }
    this.timer--;
  };

  start = () => {
    this.updateTimer();
  };
}

const clock = new Clock("#timer", 27);
clock.start();
