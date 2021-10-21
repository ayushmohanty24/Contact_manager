import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt'

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(users:any){
    return this._http.post<{message:string,users:any}>(environment.baseUrlauth+'/register',users);
  }

  loginUser(loginuser:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrlauth+'/signIn',loginuser);
  }

  checkLogin() : boolean {
    let userAuthToken:any = localStorage.getItem('token');
    if(userAuthToken === null){
      return false;
    } else {
      return !helper.isTokenExpired(userAuthToken);
    }
  }
}