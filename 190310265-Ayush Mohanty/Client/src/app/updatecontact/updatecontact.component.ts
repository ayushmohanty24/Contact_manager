import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Update } from '../update';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  public contactId!: string;
  public getid:string=localStorage.getItem('userID')??'null'; 
  public contactd = new Update('','','','');
  public message!:string;
  public isSuccess:boolean = false;
  public isError:boolean = false;
  constructor(private _dash:DashService, private _acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(params => {
      this.contactId = params.id;
    
    })
  }
  getContact(){
    this._dash.getSingleContact(this.contactId).subscribe(res=>{
      console.log(res);
      this.contactId = res.contactData._id;
      this.contactd.contactName = res.contactData.name;
      this.contactd.contactEmail = res.contactData.email;
      this.contactd.contactPhone = res.contactData.phone;
      this.contactd.contactType = res.contactData.type;
      // this.contactd.contactUserId = this.getid;
    }, err=>{
      console.log(err);
    })
  }

  addUpdateForm(): void {
    console.log(this.contactd);
    this._dash.updateContact(this.contactId, this.contactd).subscribe(res=>{
      this.message = res.message;
      this.isError = false;
      this.isSuccess = true;
    }, err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
  }
}