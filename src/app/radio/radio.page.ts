import { Component, OnInit } from '@angular/core';
import { RadioService } from '../services/radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  public showToggle:boolean = false;

  isPlaying;

  constructor(player: RadioService) {
    this.isPlaying = player;
   }

  ngOnInit() {
  }



  play() {
  this.isPlaying.play().then(() => {
    console.log('Playing');
  });
}

pause() {
  this.isPlaying.pause();
  console.log('pause');
}

toggle(){
  if (this.showToggle === false) {
    this.showToggle = true;
  } else {
  this.showToggle = false;
  }
}



}
