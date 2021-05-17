import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  cover = 'assets/img/profile/cover.png';
  img = 'assets/img/profile/img1.jpg';
  img2 = 'assets/img/profile/img2.png'
  bg = 'assets/img/profile/bg.jpg'

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
