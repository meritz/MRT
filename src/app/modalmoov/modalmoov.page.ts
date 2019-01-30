import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalmoov',
  templateUrl: './modalmoov.page.html',
  styleUrls: ['./modalmoov.page.scss'],
})
export class ModalmoovPage implements OnInit {

  foo;
  bar;

  constructor() { }

  ngOnInit() {
    console.log(`${this.foo} ${this.bar}`);
  }

}
