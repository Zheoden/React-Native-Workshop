import { NativeModules } from 'react-native';

export interface INativeModuleExample {
  /**
   * @returns The native language used by the app.
   */
  readonly getNativeLanguage: () => string;
}

export default NativeModules.NativeModuleExample as INativeModuleExample;
