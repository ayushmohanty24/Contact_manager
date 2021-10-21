import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashService {
  public authtoken=localStorage.getItem('token')??'null';
  constructor(private _http:HttpClient) { }

  

  listcontactbyuser(){
    return this._http.get<{message:string,contactData:any}>(environment.baseUrlcontact+'/'+localStorage.getItem('userID'),{
    headers: new HttpHeaders().set('x-auth-token',this.authtoken)
  })
  }
  updateContact(id: string, contact: any) {
    return this._http.put<{message: string, contactData: any}>(environment.baseUrlcontact + '/update/' + id, contact,{
      headers: new HttpHeaders().set('x-auth-token', this.authtoken)
    })
  }
  getSingleContact(id: string) {
    return this._http.get<{message: string, contactData: any}>(environment.baseUrlcontact + '/contactById/' + id,{
      headers: new HttpHeaders().set('x-auth-token', this.authtoken)
    })
  }
  deleteContact(id: string) {
    return this._http.delete<{message: string}>(environment.baseUrlcontact + '/delete/' + id,{
      headers: new HttpHeaders().set('x-auth-token', this.authtoken)
    })
  }
}