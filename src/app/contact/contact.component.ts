import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Location01Icon, CallIcon, PrinterIcon, Mail01Icon, UserIcon } from '@hugeicons/core-free-icons';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {
  cover = 'assets/img/contact/cover.png';
  Location01Icon = Location01Icon;
  CallIcon = CallIcon;
  PrinterIcon = PrinterIcon;
  Mail01Icon = Mail01Icon;
  UserIcon = UserIcon;
  contact = {
    name: '',
    email: '',
    subject:'',
    phone: 0,
    message: '',

  }
  constructor()  {
    
   }

  ngOnInit(): void {
    
  }
   
 async sendEmail(e: Event){
  emailjs.sendForm('service_016t1rt', 'template_hffn4a7',e.target as HTMLFormElement,'user_MiXV2QqwHfyZOuy6KCZjg')
  .then((result: EmailJSResponseStatus) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });

  }
}
