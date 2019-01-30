import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltogocel',
  templateUrl: './modaltogocel.page.html',
  styleUrls: ['./modaltogocel.page.scss'],
})
export class ModaltogocelPage implements OnInit {

  foo;
  bar;

  constructor() { }

  ngOnInit() {
    console.log(`${this.foo} ${this.bar}`);
  }

}
