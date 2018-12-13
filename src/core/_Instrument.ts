import { Component } from './Audio';

class _Instrument extends Component {
  on: boolean;

  constructor() {
    super();

    this.on = true;
  }

  togglePower() {
    this.on = !this.on;
    return this.on ? "ON" : "OFF";
  }
}

export default _Instrument;