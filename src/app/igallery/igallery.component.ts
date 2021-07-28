import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-igallery',
  templateUrl: './igallery.component.html',
  styleUrls: ['./igallery.component.css']
})
export class IgalleryComponent implements OnInit {
  cover = 'assets/img/gallery/cover.png'
  images = ['assets/img/gallery/i1.gif','assets/img/gallery/i2.gif','assets/img/gallery/i3.gif','assets/img/gallery/i4.gif',
  'assets/img/gallery/i5.gif','assets/img/gallery/i6.gif','assets/img/gallery/i7.gif','assets/img/gallery/i8.gif',
  'assets/img/gallery/i9.gif','assets/img/gallery/i10.gif','assets/img/gallery/i11.gif','assets/img/gallery/i12.gif',
  'assets/img/gallery/i13.gif','assets/img/gallery/i14.gif','assets/img/gallery/i15.gif','assets/img/gallery/i16.gif',
  'assets/img/gallery/i17.gif','assets/img/gallery/i18.gif','assets/img/gallery/i19.gif','assets/img/gallery/i20.gif',
  'assets/img/gallery/i21.gif','assets/img/gallery/i22.gif','assets/img/gallery/i23.gif','assets/img/gallery/i24.gif',
  'assets/img/gallery/i25.gif','assets/img/gallery/i26.gif','assets/img/gallery/i27.gif','assets/img/gallery/i28.gif',
  'assets/img/gallery/i29.gif','assets/img/gallery/i30.gif','assets/img/gallery/i31.gif','assets/img/gallery/i32.gif',
  'assets/img/gallery/i33.gif','assets/img/gallery/i34.gif','assets/img/gallery/i35.gif','assets/img/gallery/i36.gif',
  'assets/img/gallery/i37.gif','assets/img/gallery/i38.gif','assets/img/gallery/i39.gif','assets/img/gallery/i40.gif',
  'assets/img/gallery/i41.gif','assets/img/gallery/i42.gif','assets/img/gallery/i43.gif','assets/img/gallery/i44.gif',
  'assets/img/gallery/i45.gif','assets/img/gallery/i46.gif','assets/img/gallery/i47.gif','assets/img/gallery/i48.gif',
  'assets/img/gallery/i49.gif','assets/img/gallery/i50.gif',  'assets/img/gallery/i51.gif','assets/img/gallery/i52.gif','assets/img/gallery/i53.gif','assets/img/gallery/i54.gif',
  'assets/img/gallery/i55.gif','assets/img/gallery/i56.gif',]
  constructor() { }

  ngOnInit(): void {
  }

}
