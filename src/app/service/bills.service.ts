import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {Bill} from "../model/Bill";


@Injectable({
  providedIn: 'root'
})
export class BillsService {

  bills: Observable<any>;
  afs: AngularFirestore;


  constructor(private angularFirestore: AngularFirestore) {
    this.afs = angularFirestore;
    this.bills = this.afs.collection('bills').valueChanges();
  }

  getBills(): Observable<any>{
    return this.bills;
  }

  addBill(bill: Bill): void{
    this.afs.collection('bills').add(bill);
  }
}
