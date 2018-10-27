import React from "react";
import { Pedometer } from "expo";

export default class PedometerSensor {
  constructor(callback) {
    this.setStateCallBack = callback;
    this.currentStepCount = 0;
    this._subscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.currentStepCount = result.steps;
      this.setStateCallBack(this.currentStepCount);
    });
  };
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
}