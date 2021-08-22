import {Component, OnInit, ViewChild} from '@angular/core';
import {BillsService} from "../../service/bills.service";
import {Bill} from "../../model/Bill";

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {

  newBill: Bill = {
    category: '',
    price: 0,
    date: null
  };

  constructor(private billsService: BillsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.newBill);
    this.newBill.date = new Date().toString();
    this.billsService.addBill(this.newBill);
  }

}
