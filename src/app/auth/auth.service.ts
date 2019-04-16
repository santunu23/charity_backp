import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _uesrIsAuthenticated=false;

 get userIsAuthenticated(){
   return this._uesrIsAuthenticated;
 }
  constructor() { }
  login(){
    this._uesrIsAuthenticated=true;
  }

  logout(){
    this._uesrIsAuthenticated=false;
  }

}
