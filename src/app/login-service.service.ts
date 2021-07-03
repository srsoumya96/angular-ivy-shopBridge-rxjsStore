import { Injectable } from '@angular/core';

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

  loginAdmin(empId, pwd) {
    if (this.AdminData.empId == empId && this.AdminData.pwd == pwd) {
      return { loggedIn: true, name: 'Soumya' };
    } else {
      return { loggedIn: false, name: '' };
    }
  }
}
