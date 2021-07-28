import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.css']
})
export class ChemicalsComponent implements OnInit {
  cover = 'assets/img/products/chemicals/cover.png';
  img1 = 'assets/img/products/chemicals/img1.jpg';
  img2 = 'assets/img/products/chemicals/img2.png';
  img3 = 'assets/img/products/chemicals/img3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
