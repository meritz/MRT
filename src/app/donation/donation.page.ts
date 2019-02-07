import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  motantDon: number;
  code: number;

  constructor(public modalCtrl: ModalController,
               private call: CallNumber,
               private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  async togocelMrt() {
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () =>{
            this.callNumberT();
            console.log('Confirmé !')
          }
        }
      ]
    });
    alert.present();
  }

  async moovMrt() {
    // present the modal
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.callNumber();
            console.log('Confirmé !');
          }
        }
      ]
    });
    alert.present();
  }

  async callNumber(): Promise<any> {
    try {
      await this.call.callNumber('*155*2*2*97595959*' + String(this.motantDon) + '*' + String(this.code) + '#' , true);
    } catch (e) {
      console.error(e);
    }
  }

  async callNumberT(): Promise<any> {
    try {
      await this.call.callNumber('*145*1*1*' + String(this.motantDon) + '*90757575*1*' + String(this.code) + '#' , true);
    } catch (e) {
      console.error(e);
    }
  }


  donEnLigne() {

  }



}
