import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    a {
      color: tomato;
      display: inline-block;
      margin: 15px;
      font-size: 16px;
      text-transform: capitalize;

    }
  `]
})

export class HomeComponent {
 constructor() {}
}
