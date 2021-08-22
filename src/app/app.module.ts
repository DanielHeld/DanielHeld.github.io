import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillFormComponent } from './components/bill-form/bill-form.component';
import {FormsModule} from '@angular/forms';
import { BillsComponent } from './components/bills/bills.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';



@NgModule({
  declarations: [
    AppComponent,
    BillFormComponent,
    BillsComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
