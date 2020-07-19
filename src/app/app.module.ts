import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest-component/guest.component';
import { MemberComponent } from './member-component/member.component';
import { HomeComponent } from './home-component/home.component';
import { LoginRedirectComponent } from './auth-module/login-redirect.component';
import { LogOutRedirectComponent } from './auth-module/logout-redirect.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    MemberComponent,
    HomeComponent,
    LoginRedirectComponent,
    LogOutRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
