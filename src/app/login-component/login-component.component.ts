import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) {}

  loggedInUser = {
    loggedIn: true,
    name: ''
  };

  ngOnInit() {}

  loginAdmin(empId, pwd) {
    this.loggedInUser = this.loginService.loginAdmin(empId, pwd);
    if (empId != '' && pwd != '') {
      if (this.loggedInUser.loggedIn) {
        this.router.navigate(['/home']);
      } else {
        alert('Please enter correct credentials');
      }
    }
  }
}
