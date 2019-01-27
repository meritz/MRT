import { Component, OnInit } from '@angular/core';

import { RadioService } from './../services/radio.service';
import { NavController } from '@ionic/angular';

// import { RadioPage } from './../radio/radio.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  isPlaying;
  // anRadioPage: RadioPage;

constructor( player: RadioService, public navCtrl: NavController) {
  this.isPlaying = player;
}

ngOnInit() {

}


// startStopPlaying () {
//   // your logic to play pause
//   if (this.isPlaying) {
//     // pause here
//     // this.pause();
//     this.isPlaying.pause();
//     // this.play();
//   } else {
//     // play here
//     // this.play();
//     // this.isPlaying.play();
//     this.isPlaying.play().then(() => {
//            console.log('Playing');
//       });
//     // this.pause();
//     // console.log('Pause');
//   }
//   this.isPlaying = !this.isPlaying;
// };

startStopPlaying () {
  if (this.isPlaying) {
    this.isPlaying.play().then(() => {
     console.log('playing');
    });
  } else {
  this.isPlaying.pause = false;
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

