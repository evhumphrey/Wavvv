import _AudioContextSingleton from './_AudioContextSingleton';

// AUDIO is singleton
class Component {
  audioCtx: AudioContext | _AudioContextSingleton;

  constructor() {
    this.audioCtx = new _AudioContextSingleton();
  }
}

export default Component;