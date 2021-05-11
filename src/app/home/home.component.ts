import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img1 = 'assets/img/home/carousel1.png';
  img2 = 'assets/img/home/carousel2.png';
  img3 = 'assets/img/home/carousel3.png';
  img4 =  'assets/img/home/img1.png';
  img5 = 'assets/img/home/img2.png';
  img6 = 'assets/img/home/img3.png';
  img7 = 'assets/img/home/img4.png';

  hislide = 'assets/jquery.hislide.js'
  constructor() { }

  ngOnInit(): void {
  }

}
