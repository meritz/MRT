import { Component, OnInit } from '@angular/core';

import { RadioService } from './../services/radio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  
  isPlaying: fals;

constructor( player: RadioService) {
  this.isPlaying = player;
}

ngOnInit() {

}

startStopPlaying () {
  // your logic to play pause
  if (this.isPlaying) {
    // pause here
    this.pause();
    console.log('pause');
  } else {
    // play here
    this.isPlaying.play().then(() => {
      console.log('Playing');
    });

    // this.play();
    console.log('Playing');
  }
  this.isPlaying = !this.isPlaying;
}

play() {
  this.isPlaying.play().then(() => {
    console.log('Playing');
  });
}

pause() {
  this.isPlaying.pause();
}

}

