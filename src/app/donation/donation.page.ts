import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { ModaltogocelPage } from '../modaltogocel/modaltogocel.page';
import { ModalmoovPage } from '../modalmoov/modalmoov.page';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

//   async  togocelMrt() {
//    // present the modal
//   const modalElement = await this.modalCtrl.create({
//     component: ModaltogocelPage
//   });
//   await modalElement.present();
// console.log('togocel');
//   }

  async togocelMrt() {
    const modal = await this.modalCtrl.create({
      component: ModaltogocelPage,
      componentProps: {
        foo: 'hello',
        bar: 'world',
      }
    });
    await modal.present();
    console.log('togocel');
  }

  async moovMrt() {
    // present the modal
  const modalElement = await this.modalCtrl.create({
    component: ModalmoovPage,
    componentProps: {
      foo: 'modeste',
      bar: 'agbakou',
    }
  });
  await modalElement.present();
    console.log('moov');
  }

  donEnLigne() {

  }

}
