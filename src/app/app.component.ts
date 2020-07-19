import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-module/auth.service';
import { GoogleAuthService } from './auth-module/google-auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClassRoomApp';
  isLoggedIn: boolean = false;
  private _IDPUsed: string;
  User: User;
  constructor(private _authService: AuthService,
    private _googleAuthService: GoogleAuthService) { }
  ngOnInit() {
    this._authService.CurrentUser.subscribe(user => {
      this.isLoggedIn = user && !user.expired ? true : false;
      this.User = this.isLoggedIn ? user : null;
    })
  }

  login(e) {
    var button = e.target.nodeName.toUpperCase() == "I" ? e.target.parentNode : e.target;
    switch (button.dataset["idp"]) {
      case 'is4': this._authService.login();
        break;
      case 'google': this._googleAuthService.login();
        break;
    }

  }
  logout() {
    this._authService.CurrentUser.subscribe(user => {
      this._IDPUsed = user.id_token["iss"]
    })
    this._authService.logout();
  }
}
