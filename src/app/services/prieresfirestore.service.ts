import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Priere } from '../models/priere';

@Injectable({
  providedIn: 'root'
})
export class PrieresfirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createPriere(nomEmet: string, message: string, tele:number, createdAt: number ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`priereList/${id}`).set({
      id,
      nomEmet,
      message,
      tele,
      createdAt,
    });
  }

  getSongList(): AngularFirestoreCollection<Priere> {
    return this.firestore.collection(`priereList`);
  }
}
