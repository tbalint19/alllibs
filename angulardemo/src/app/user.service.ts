import { Injectable } from '@angular/core';

type User = {
  username: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logout: Function
  user: User | null = { username: "John" }

  public logoutFunction() {
    this.user = null
  }

  constructor() {
    this.logout = this.logoutFunction.bind(this)
  }
}
