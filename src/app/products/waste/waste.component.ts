import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {
  cover= 'assets/img/products/wwt/cover.png'
  constructor() { }

  ngOnInit(): void {
  }

}
