import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterpgComponent } from './registerpg/registerpg.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstpageComponent,
    RegisterpgComponent,
    AddContactComponent,
    UpdatecontactComponent,
    FrontpageComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
