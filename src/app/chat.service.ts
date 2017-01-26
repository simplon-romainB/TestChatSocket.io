import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
socket:SocketIOClient.Socket = io.connect('http://caty.herokuapp.com/');
  constructor(http: Http) { }

  sendMessage(){

  }

}
