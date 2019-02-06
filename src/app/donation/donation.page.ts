import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';
import { ModaltogocelPage } from '../modaltogocel/modaltogocel.page';
import { ModalmoovPage } from '../modalmoov/modalmoov.page';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  constructor(public modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  async togocelMrt() {
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      inputs: [
        {
          name: 'code secret',
          type: 'number',
          placeholder: 'code de confirmation'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    alert.present();
  }

  async moovMrt() {
    // present the modal
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      inputs: [
        {
          name: 'code secret',
          type: 'number',
          min: -4,
          max: 4,
          placeholder: 'code de confirmation'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    alert.present();
  }

  donEnLigne() {

  }

}
