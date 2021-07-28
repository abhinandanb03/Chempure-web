import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swaste',
  templateUrl: './swaste.component.html',
  styleUrls: ['./swaste.component.css']
})
export class SwasteComponent implements OnInit {
  cover = 'assets/img/products/solid waste/cover.png'
  img = 'assets/img/products/solid waste/img1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
