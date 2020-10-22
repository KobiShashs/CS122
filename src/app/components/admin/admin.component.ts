import { AdminRestService } from './../../services/admin-rest.service';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // customers = [new Customer(123, 'kobi', 'shasha', 'kobi@gmail.com', '1234'),
  // new Customer(555, 'guy', 'shefer', 'guy@gmail.com', '1234'),
  // new Customer(789, 'shlomi', 'kariti', 'shlomi@gmail.com', '1234'),
  // new Customer(781, 'oren', 'nudelman', 'oren@gmail.com', '1234')];

  customers: Customer[];
  constructor(private srv: AdminRestService) { }

  ngOnInit(): void {
    this.srv.getAllCustomers().subscribe(
      (res) => { this.customers = res },
      (err) => { alert(err.error) });

  }

}
