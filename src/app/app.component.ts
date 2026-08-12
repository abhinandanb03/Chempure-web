import { Component } from '@angular/core';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'chemp-ang';
  logo = 'assets/img/home/logo.png'
  ArrowDown01Icon = ArrowDown01Icon;
}
