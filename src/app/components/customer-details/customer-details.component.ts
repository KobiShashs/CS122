import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  id: number;
  constructor(private activatedRoute: ActivatedRoute) {
    //this.id = Number(activatedRoute.snapshot.params.id);
    this.id = +(activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

}
