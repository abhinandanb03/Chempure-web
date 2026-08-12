import { Component, OnInit } from '@angular/core';
import { CallIcon, Mail01Icon } from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  logo = 'assets/img/home/logo.png'
  CallIcon = CallIcon;
  Mail01Icon = Mail01Icon;
  constructor() { }

  ngOnInit(): void {
  }

}
