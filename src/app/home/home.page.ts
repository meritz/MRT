import { Component, OnInit } from '@angular/core';

import { RadioService } from './../services/radio.service';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

// import { RadioPage } from './../radio/radio.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  isPlaying;
  // anRadioPage: RadioPage;

constructor( player: RadioService, public navCtrl: NavController, private router: Router) {
  this.isPlaying = player;
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


startStopPlaying () {
  if (this.isPlaying) {
    this.isPlaying.play().then(() => {
     console.log('playing');
    });
  } else {
  this.isPlaying.pause(false);
  console.log('pause');
  }
  this.isPlaying = !this.isPlaying;
}



//   play() {
//   this.isPlaying.play().then(() => {
//     console.log('Playing');
//   });
// }

// pause = function() {
//   this.isPlaying.pause();
// };

}

