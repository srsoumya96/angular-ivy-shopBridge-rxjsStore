import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { store } from '../store/store';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {
    store.subscribe(state => {
      const { loggedInUser } = state;
      this.loggedInUser = loggedInUser;
      console.log(this.loggedInUser);

      if (loggedInUser.loggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }

  loggedInUser = {
    loggedIn: false,
    empId: '',
    name: ''
  };

  ngOnInit() {}

  logout() {
    this.loginService.logOutAdmin();
  }
}
