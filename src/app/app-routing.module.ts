import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest-component/guest.component';
import { MemberComponent } from './member-component/member.component';
import { MemberGuard } from './member-component/member-guard';
import { HomeComponent } from './home-component/home.component';
import { LoginRedirectComponent } from './auth-module/login-redirect.component';
import { LogOutRedirectComponent } from './auth-module/logout-redirect.component';


const routes: Routes = [
  {path: 'guest', component: GuestComponent},
  {path:'member', component: MemberComponent, canActivate: [MemberGuard]},
  {path:'home', component: HomeComponent},
  {path:'signin-callback', component: LoginRedirectComponent},
  {path:'signout-callback', component: LogOutRedirectComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
