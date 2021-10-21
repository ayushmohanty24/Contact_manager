
import { Component, OnInit } from '@angular/core';
import {DashService} from '../dash.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Data:any[]=[];
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  constructor(private _ps:DashService,private _router:Router) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.loadContacts();
    }else{
     
      localStorage.clear();
      this._router.navigate(['/firstpage']);
    }
    
    
  }
  loadContacts(){
    this._ps.listcontactbyuser().subscribe(Response=>{
      console.log(Response);
      this.Data=Response.contactData;
    },err=>{
      console.log(err);
    } )
  }
  onDeleteContact(contact:any){
    this._ps.deleteContact(contact._id).subscribe(res=>{
      this.message=res.message;
      this.isSuccess=true;
      this.isError=false;
    }, err=>{
      this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    });
    this.loadContacts();
  }
}