import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vgallery',
  templateUrl: './vgallery.component.html',
  styleUrls: ['./vgallery.component.css']
})
export class VgalleryComponent implements OnInit {
  cover = 'assets/img/gallery/vgallery/cover.png';
  
  videos = ["https://www.youtube.com/embed/1rb1tPoOdzk",
            "https://www.youtube.com/embed/9BsIwQFpcH4",
            "https://www.youtube.com/embed/ajIRlth0kVU",
            "https://www.youtube.com/embed/8TqoOJMit4s",
            "https://www.youtube.com/embed/IWwNAnPI1g0",
            "https://www.youtube.com/embed/aURCpQKbaAs",
            "https://www.youtube.com/embed/KKyS38r7UkA",
            "https://www.youtube.com/embed/LfalVHPoKs4",
            "https://www.youtube.com/embed/Sk5jzBpLD8w"]
  constructor() { }

  ngOnInit(): void {
  }

}
