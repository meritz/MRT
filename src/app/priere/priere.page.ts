import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { PrieresfirestoreService} from '../services/prieresfirestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-priere',
  templateUrl: './priere.page.html',
  styleUrls: ['./priere.page.scss'],
})
export class PrierePage implements OnInit {

  public createPriereForm: FormGroup;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public prieresfirestoreService: PrieresfirestoreService,
    private router: Router,
    formBuilder: FormBuilder) {

      this.createPriereForm = formBuilder.group({
        nomEmet: ['', Validators.required],
        message: ['', Validators.required],
        tele: ['', Validators.required],
      });
     }


  ngOnInit() {
  }

  async createPriere() {
    const loading = await this.loadingCtrl.create();

    const nomEmet = this.createPriereForm.value.nomEmet;
    const message = this.createPriereForm.value.message;
    const tele = this.createPriereForm.value.tele;
    const createdAt = new Date().getTime();

    this.prieresfirestoreService.createPriere(nomEmet, message, tele, createdAt)
    .then(
      () => {
        loading.dismiss().then(() => {
           this.router.navigateByUrl('');
          // this.router.navigate(['dedicace']);
        });
      },
      error => {
        console.error(error);
      }
    );

  return await loading.present();
   }

}
