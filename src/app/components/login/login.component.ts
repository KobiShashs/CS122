import { DevModeService } from './../../services/dev-mode.service';
import { LoginDetails } from './../../models/login-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDetails: LoginDetails = new LoginDetails();
  constructor(private dev: DevModeService) { }

  ngOnInit(): void {
  }

  public login(): void{
      console.log(this.loginDetails);
  }


  public isDev(){
    return this.dev.getIsDev();
  }

}
