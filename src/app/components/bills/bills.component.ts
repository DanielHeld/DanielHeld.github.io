import { Component, OnInit } from '@angular/core';
import {Bill} from '../../model/Bill';
import {BillsService} from "../../service/bills.service";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills: Bill[] = [
/*    {
      id: 1,
      category: 'supermarket',
      price: 10.00,
      date: new Date()
    },
    {
      id: 2,
      category: 'car',
      price: 15.55,
      date: new Date()
    },
    {
      id: 3,
      category: 'other',
      price: 33,
      date: new Date()
    }*/
  ];
  constructor(private billsService: BillsService) { }

  ngOnInit(): void {
    this.billsService.getBills().subscribe(data => {
      this.bills = data;
      this.bills.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
    });
  }

}
