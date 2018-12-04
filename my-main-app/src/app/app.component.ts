import { Component } from '@angular/core';
import * as test from 'my-lib';
import * as hello from 'hello-world';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-main-app';

  constructor() {
    console.log(test, hello);
  }
}
