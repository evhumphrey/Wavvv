class _AudioContextSingleton extends AudioContext {
  static instance: AudioContext;
  static instanceCreated: boolean;

  constructor() {
    if (!_AudioContextSingleton.instanceCreated) {
      super();
      return _AudioContextSingleton.getInstance();
    }

    return _AudioContextSingleton.instance;
  }


  static getInstance() {
    if (!this.instance) {
      this.instanceCreated = true; // prevent infinite loop
      this.instance = new AudioContext();
      Object.freeze(this);
    }
    return this.instance;
  }
}

export default _AudioContextSingleton;