/* service qui se chargera, par le biais d'observables, de gerer les interactions avec l'API serveur */


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as io from 'socket.io-client';

@Injectable()
export class Chat2Service {
 socket:any = io.connect('http://caty.herokuapp.com/');
 data:{message:string , roomName:string};
  constructor(http:Http) { }


sendMessage(data){

this.socket.emit('send:message', data);

}
/* observable qui sera surveillé dans appcomponent afin d'afficher les messages envoyés */
getMessages() {
  let observable = new Observable(observer => {
    this.socket.on('send:message', (data) => {
      observer.next(data);
    });
  });
  return observable;
}
/* observable qui enregistrera les connexions */
whoThere() {
  let usersOnline = new Observable(observer =>{
    this.socket.on('init', (data) =>{
      observer.next(data);
    });
  });
  return usersOnline;
}
}
