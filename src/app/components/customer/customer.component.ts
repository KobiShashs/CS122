import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private title: Title, private router: Router) {
    this.title.setTitle('customer');
  }

  ngOnInit(): void {
  }

  public yallaBalagan(): void {
    this.router.navigateByUrl('company');
  }

}
