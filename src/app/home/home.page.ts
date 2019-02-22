import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  text = '“ Rechercher son royaume et tout le reste sera ajouté à vous "(Lc 12, 31).';
  url = 'https://donationafrica.radiomaria.org/togo/';

  constructor(  public navCtrl: NavController, private router: Router, private socialSharing: SocialSharing) {

  }

  ngOnInit() {

  }

  opendedicace() {
    this.router.navigate(['dedicace']);
  }

  opendonation() {
    this.router.navigate(['donation']);
  }

  openpriere() {
    this.router.navigate(['priere']);
  }

  openradio() {
    this.router.navigate(['radio']);
  }

  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

}

