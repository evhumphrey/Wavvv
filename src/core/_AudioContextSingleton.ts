class _AudioContextSingleton {
  static instance: _AudioContextSingleton;

  constructor() {
    if (!_AudioContextSingleton.instance) {
      return _AudioContextSingleton.getInstance();
    }

    return _AudioContextSingleton.instance;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = true;
      this.instance = new this();
      Object.freeze(this);
    }
    return this.instance;
  }
}

export default _AudioContextSingleton;