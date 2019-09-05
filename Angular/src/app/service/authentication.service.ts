import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isLoggedIn()
  {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)

  }
  
  isAdminLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    let userType=sessionStorage.getItem('userType')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.clear()
  }

}
