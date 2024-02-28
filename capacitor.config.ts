import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tech.newchapter.languageXchange',
  appName: 'languageXchange',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'alert', 'sound'],
    },
    Badge: {
      persist: true,
      autoClear: false,
    },
    CapacitorUpdater: {
      autoUpdate: false,
    },
  },
};

export default config;
