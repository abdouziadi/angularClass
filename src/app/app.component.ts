import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg='hello from parent';
  message='Bonjour';
  image='https://tinypng.com/images/social/website.jpg'
  title = 'demo';
  sendmessage(){
    alert("!!!!!!!!!!!!!!!!!!!!")

  }
  msgEnfant='';
  receiveMessage($event:string){
    this.msgEnfant=$event;
  }
}
