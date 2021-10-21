import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private _http:HttpClient) { }
  addUserData(contacts:any){
    return this._http.post<{message:string,contact:any}>(environment.baseUrlcontact+'/add',contacts);
  }
}
