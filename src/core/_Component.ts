import _AudioContextSingleton from './_AudioContextSingleton';

// AUDIO is singleton
class Component {
  audioCtx: _AudioContextSingleton;

  constructor() {
    this.audioCtx = new _AudioContextSingleton();
  }
}

export default Component;