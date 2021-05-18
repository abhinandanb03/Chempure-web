import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.css']
})
export class ChemicalsComponent implements OnInit {
  cover = 'assets/img/products/chemicals/cover.png'
  constructor() { }

  ngOnInit(): void {
  }

}
