import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { store } from '../store/store';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) {
    store.subscribe(state => {
      const { loggedInUser } = state;
      this.loggedInUser = loggedInUser;
      console.log(this.loggedInUser);
    });
  }

  notification = {
    type: '',
    message: ''
  };

  loggedInUser = {
    loggedIn: false,
    empId: '',
    name: ''
  };

  ngOnInit() {}

  loginAdmin(empId, pwd) {
    this.notification = this.loginService.loginAdmin(empId, pwd);
    if (this.loggedInUser.loggedIn) {
      this.router.navigate(['/home']);
    }
  }
}
