import { Component, Instrument } from './Audio';

class Track extends Component {
  gain: GainNode;

  constructor(public instrument? : Instrument) {
    super();

    this.instrument = instrument || null;
    this.gain = this.audioCtx.createGain();
  }
}

export default Track;