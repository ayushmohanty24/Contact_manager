import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component'
import {FirstpageComponent} from './firstpage/firstpage.component';
import {RegisterpgComponent} from './registerpg/registerpg.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {UpdatecontactComponent} from './updatecontact/updatecontact.component';
import { AuthGuardService } from './auth-guard.service';
import {NavComponent} from './nav/nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'frontpage', component: FrontpageComponent},
      { path: 'registerpg', component: RegisterpgComponent},
      { path: 'firstpage', component: FirstpageComponent},
      { path: 'nav', component: NavComponent},
      { path: 'add-contact', component: AddContactComponent,canActivate:[AuthGuardService]},
      { path: 'updatecontact/:id', component: UpdatecontactComponent,canActivate:[AuthGuardService]},
      { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuardService]},
      { path: 'logout', component:LogoutComponent},
      { path: '', redirectTo: '/frontpage', pathMatch:'full'}

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
