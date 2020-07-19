import { Injectable } from "@angular/core";
import { User, UserManager } from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GoogleAuthService {
    private _user: User;
    private _selectedIDP: string;
    private _is4UserManager: UserManager;
    private _googleUserManager: UserManager;
    private _userSubject: Subject<User> = new Subject<User>();

    CurrentUser = this._userSubject.asObservable();

    constructor() {
        this._googleUserManager = new UserManager({
            authority: "https://accounts.google.com",
            redirect_uri: "http://localhost:4200/signin-callback",
            post_logout_redirect_uri: "http://localhost:4200/signout-callback",
            client_id: "843327619114-ldobqmc9uthslaqcp99j37qb81kp1ofc.apps.googleusercontent.com",
            response_type: "id_token token",
            scope: "openid profile",
            response_mode: "fragment",
        })
    }

    login() {
        this._googleUserManager.signinRedirect();
    }

    logout() {
        this._googleUserManager.signoutRedirect();
    }
    completeLogin() {
        return this._googleUserManager.signinRedirectCallback().then(user => {
            this._user = user;
            this._userSubject.next(user);
            return user;
        })
    }
    completeLogout() {
        return this._googleUserManager.signoutRedirectCallback();
    }

}