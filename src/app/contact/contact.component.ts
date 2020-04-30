import { Component, OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactsForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    subject:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required])
  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
}
  constructor() { }
  ngOnInit() {
  }

}
