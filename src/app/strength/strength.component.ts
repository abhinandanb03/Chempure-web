import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {
  cover = 'assets/img/strength/cover.png';
  img1 = 'assets/img/strength/iso.gif';
  img2 = 'assets/img/strength/qc.png';
  img3 = 'assets/img/strength/img4.png'
  constructor() { }

  ngOnInit(): void {
  }

}
