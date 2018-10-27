import React from "react";
import { Pedometer } from "expo";
import {action, observable} from "mobx";

export default class PedometerSensor {
  constructor() {
    this.currentStepCount = 0;
    this._subscribe();
  }
  @observable currentStepCount;

  @action
  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.currentStepCount = result.steps
    });
  };
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
}