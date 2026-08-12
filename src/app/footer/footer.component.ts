import { Component, OnInit } from '@angular/core';
import { CallIcon, PrinterIcon, Facebook01Icon, Linkedin01Icon, NewTwitterIcon } from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent implements OnInit {
  logoNew = 'assets/img/home/logo-new.png';
  CallIcon = CallIcon;
  PrinterIcon = PrinterIcon;
  Facebook01Icon = Facebook01Icon;
  NewTwitterIcon = NewTwitterIcon;    
  Linkedin01Icon = Linkedin01Icon;
  constructor() { }

  ngOnInit(): void {
  }

}
