import { Component, OnInit } from '@angular/core';
import { Chat2Service } from './chat2.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Chat2Service],

})

export class AppComponent {
tabUsers = [];
b= [];
mess:string;

a = this.chat2service.getMessages().subscribe(data => {
    this.b.push(data);
    console.log(this.b);

  })
usersOnline = this.chat2service.whoThere().subscribe(data =>{
  this.tabUsers.push(data);
  })



 data = {message:'', roomName: 'public'};
constructor(private chat2service:Chat2Service){}
ngOnInit() {

}
  sendMessages() {
    this.data.message = this.mess;
    this.chat2service.sendMessage(this.data);
    this.mess = '';

  }

  whoThere() {
    this.chat2service.whoThere()
  }
}
