import { Injectable } from '@angular/core';

import { eventDispatcher, store } from './store/store';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() {}

  AdminData = {
    empId: '20104578',
    pwd: '1234',
    name: 'Soumya'
  };

  getLogin() {
    eventDispatcher.next({
      type: 'getLogin'
    });
  }

  loginAdmin(empId, pwd) {
    if (this.AdminData.empId == empId && this.AdminData.pwd == pwd) {
      eventDispatcher.next({
        type: 'LogInAdmin',
        payload: {
          empId: empId,
          name: this.AdminData.name
        }
      });

      return { type: 'Success', message: 'Login Successful.' };
    } else {
      eventDispatcher.next({
        type: 'LogOutAdmin'
      });
      return {
        type: 'Error',
        message: 'Please Enter Correct Admin Credentials.'
      };
    }
  }

  logOutAdmin() {
    eventDispatcher.next({
      type: 'LogOutAdmin'
    });
  }
}
