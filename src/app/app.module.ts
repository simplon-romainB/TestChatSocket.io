import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { Chat2Service } from './chat2.service';
import { InscriptionComponent } from './inscription/inscription.component';

const MyRoutes: Routes = [{path: 'register', component: InscriptionComponent }];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(MyRoutes)

  ],
  providers: [Chat2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
