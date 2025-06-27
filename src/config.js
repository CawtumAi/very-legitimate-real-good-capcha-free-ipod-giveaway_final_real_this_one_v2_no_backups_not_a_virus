export class Config {
  setValues(values) {
    for (const [key, value] of Object.entries(values)) {
      this[key] = value;
    }
  }
}

const config = new Config();
export default config;

class DebugConfig {
  constructor() {
    this.isEnabled = false;
  }
}
export const debugConfig = new DebugConfig();
