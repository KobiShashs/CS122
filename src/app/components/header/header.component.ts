import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    alert('Login!');
    this.flag = !this.flag;
  }

  public logout(): void {
    const res = confirm('Are you suer you want to log out?');
    if (res) {
      alert('Yalla Bye!');
      this.flag = !this.flag;
    } else {
      alert('I know you love us!')
    }

  }

}
