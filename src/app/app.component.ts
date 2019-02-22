import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Radio',
      url: '/radio',
      icon: 'radio',
    },
    {
      title: 'Dedicace',
      url: '/dedicace',
      icon: 'microphone',
    },
    {
      title: 'Donation',
      url: '/donation',
      icon: 'card',
    },
    {
      title: 'Priere',
      url: '/priere',
      icon: 'flame',
    },
    // {
    //   title: 'Emission',
    //   url: '/list',
    //   icon: 'recording',
    // }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.statusBar.backgroundColorByHexString('#3171e0');
      this.splashScreen.hide();
    });
  }
}
