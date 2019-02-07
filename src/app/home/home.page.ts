import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

// import { RadioPage } from './../radio/radio.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  // anRadioPage: RadioPage;

constructor(  public navCtrl: NavController, private router: Router) {

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


// startStopPlaying () {
//   if (this.isPlaying) {
//     this.isPlaying.play().then(() => {
//      console.log('playing');
//     });
//   } else {
//   this.isPlaying.pause(false);
//   console.log('pause');
//   }
//   this.isPlaying = !this.isPlaying;
// }



//   play() {
//   this.isPlaying.play().then(() => {
//     console.log('Playing');
//   });
// }

// pause = function() {
//   this.isPlaying.pause();
// };

}

