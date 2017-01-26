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
/* on surveille les messages arrivant du serveur */
a = this.chat2service.getMessages().subscribe(data => {
    this.b.push(data);
    console.log(this.b);

  })
  /* on surveille les connexions */
usersOnline = this.chat2service.whoThere().subscribe(data =>{
  this.tabUsers.push(data);
  })



 data = {message:'', roomName: 'public'};
constructor(private chat2service:Chat2Service){}
ngOnInit() {

}
/* on fait une fonction relai pour envoyer les messages */
  sendMessages() {
    this.data.message = this.mess; /* il n'est pas possible de mettre directement la variable mess dans les data envoyés */
    this.chat2service.sendMessage(this.data);
    this.mess = '';

  }


}
