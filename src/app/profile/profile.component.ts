import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Output () msgEvent=new EventEmitter<string>();

    sendMessage(){
        this.msgEvent.emit("hello from child");
      }



    @Input('msg')message:string='';
}
