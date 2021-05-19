import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cover = 'assets/img/products/services/cover.png';

  set1 = [{img: 'assets/img/products/services/img1.jpg', title: 'Reverse osmosis'},
          {img: 'assets/img/products/services/img2.jpg', title: 'Softener'},
          {img: 'assets/img/products/services/img3.jpg', title: 'Iron Reoval System'}]
  set2 = [{img: 'assets/img/products/services/img4.jpg', title: 'De Mineralizing Plants'},
          {img: 'assets/img/products/services/img5.jpg', title: 'Filtration units'},
          {img: 'assets/img/products/services/img6.jpg', title: 'Disinfection system'}]
  set3 = ['assets/img/products/services/img7.png','assets/img/products/services/img8.png','assets/img/products/services/img9.png','assets/img/products/services/img10.png',]
  
  set4 = [{img: 'assets/img/products/services/comp/1.jpg', title: 'Cartridge Filter'},
          {img: 'assets/img/products/services/comp/2.jpg', title: 'Membrane housing Spares'},
          {img: 'assets/img/products/services/comp/3.jpg', title: '“O” rings'},
          {img: 'assets/img/products/services/comp/4.jpg', title: 'Filter Cloth'},
          {img: 'assets/img/products/services/comp/5.jpg', title: 'Filter Media'},
          {img: 'assets/img/products/services/comp/6.jpg', title: 'Activated Carbon'},
          {img: 'assets/img/products/services/comp/7.jpg', title: 'Mechanical Seal'},
          {img: 'assets/img/products/services/comp/8.jpg', title: 'Air Diffusers'},
          {img: 'assets/img/products/services/comp/9.jpg', title: 'All Types of pump spares'},
          {img: 'assets/img/products/services/comp/10.jpg', title: 'Resins'},
          {img: 'assets/img/products/services/comp/11.jpg', title: 'Bio Medias'}]

  set5 = [{img: 'assets/img/products/services/comp/12.jpg', title: 'All Types of pump'},
          {img: 'assets/img/products/services/comp/13.jpg', title: 'Membrane'},
          {img: 'assets/img/products/services/comp/14.jpg', title: 'UF Membranes'},
          {img: 'assets/img/products/services/comp/15.jpg', title: 'Filter Press'},
          {img: 'assets/img/products/services/comp/16.jpg', title: 'Centrifuge'},
          {img: 'assets/img/products/services/comp/17.jpg', title: 'Pressure Vessels'},
          {img: 'assets/img/products/services/comp/18.jpg', title: 'Filters'},
          {img: 'assets/img/products/services/comp/19.jpg', title: 'Gear Boxes'},
          {img: 'assets/img/products/services/comp/20.jpg', title: 'Agitators'},
          {img: 'assets/img/products/services/comp/21.jpg', title: 'Dosing Pumps'},
          {img: 'assets/img/products/services/comp/22.jpg', title: 'Ultra Violet System'},
          {img: 'assets/img/products/services/comp/23.jpg', title: 'Ozonation Systems'}]

  constructor() { }

  ngOnInit(): void {
  }

}
