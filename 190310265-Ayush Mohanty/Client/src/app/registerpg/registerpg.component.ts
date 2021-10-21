import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service'

@Component({
  selector: 'app-registerpg',
  templateUrl: './registerpg.component.html',
  styleUrls: ['./registerpg.component.css']
})
export class RegisterpgComponent implements OnInit {
  public userin = new User("","","")
  public message!: string;
  public isError:boolean =false;
  public isSuccess:boolean=false;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    this._userService.registerUser(this.userin).subscribe(Response=>{
    // console.log(Response);
    this.message=Response.message;
    this.isSuccess=true;
    this.isError=false;
    },err=>{
      // console.log(err);
      this.message=err.error.message;
      this.isSuccess=false;
      this.isError=true;
    })
  }
}


