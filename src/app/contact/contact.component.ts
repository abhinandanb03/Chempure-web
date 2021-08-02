import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cover = 'assets/img/contact/cover.png';
  contact = {
    name: '',
    email: '',
    subject:'',
    phone: 0,
    message: ''
  }
  constructor() { }

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
