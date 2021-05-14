import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
  bg = 'assets/img/home/bg.gif';
  bg1 = 'assets/img/home/bg1.gif';
  bg2 = 'assets/img/home/bg2.gif';
  bg3 = 'assets/img/home/bg3.gif';
  bg4 = 'assets/img/home/bg4.gif';
  
  slides = [
    {id: 1, img: 'assets/img/clients/c1.jpg'},
    {id: 2, img: 'assets/img/clients/c2.jpg'},
    {id: 3, img: 'assets/img/clients/c3.jpg'},
    {id: 4, img: 'assets/img/clients/c4.jpg'},
    {id: 5, img: 'assets/img/clients/c5.jpg'},
    {id: 6, img: 'assets/img/clients/c6.jpg'},
    {id: 7, img: 'assets/img/clients/c7.jpg'},
    {id: 8, img: 'assets/img/clients/c8.jpg'},
    {id: 9, img: 'assets/img/clients/c9.png'},
    {id: 10, img: 'assets/img/clients/c10.jpg'},
    {id: 11, img: 'assets/img/clients/c11.jpg'},
    {id: 12, img: 'assets/img/clients/c12.jpg'}
  ];

  card = [{
    img: 'assets/img/home/iso-logo.jpg',
    txt: 'ISO 9001 : 2015 Certified Since 2004',
  },
  {
    img: 'assets/img/home/iso-logo1.jpg',
    txt: 'NSF Certified Since 2019'
  },
  {
    img: 'assets/img/home/iso-logo2.jpg',
    txt: 'NSIC Certified Since 2012',
  },
  {
    img: 'assets/img/home/iso-logo4.jpg',
    txt: 'Member of IWO Since 2008'
  },
  {
    img: 'assets/img/home/NFS-logo.jpg',
    txt: 'Member of IWA since 2003 - Young Professional Development Award 2008'
  },
  {
    img: 'assets/img/home/NSIC-logo.jpg',
    txt: 'Business Excellence Award for the year 2008 from International Study Circle'
  }]


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    margin: 10,
    responsive: {
      0:{
        items:3
      },
      600:{
          items:5
      },
      1000:{
          items:6
      }
      },
    nav: false,
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
