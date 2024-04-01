import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  contactNo: string = '';
  message: string = '';
 
  sendMessage(): void {
    console.log("Message sent!");
    console.log("Name: ", this.name);
    console.log("Email: ", this.email);
    console.log("Contact No: ", this.contactNo);
    console.log("Message: ", this.message);
 
    alert("Message sent!");
  }
  // sendMessage(): void {
  //   console.log("");
  //   alert("your information saved successfully");
  // }
}


