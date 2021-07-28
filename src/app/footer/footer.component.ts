import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logoNew = 'assets/img/home/logo-new.png';
  constructor() { }

  ngOnInit(): void {
  }

}
