import { Injectable } from "@angular/core";
import { User, UserManager } from "oidc-client"
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private _user: User;
    private _is4UserManager: UserManager;
    private _googleUserManager: UserManager;
    private _userSubject: Subject<User> = new Subject<User>();

    CurrentUser = this._userSubject.asObservable();

    constructor() {
        this._is4UserManager = new UserManager({
            authority: "https://localhost:5123",
            // authority:"https://api.github.com",
            redirect_uri: "http://localhost:4200/signin-callback",
            post_logout_redirect_uri: "http://localhost:4200/signout-callback",
            client_id: "AppUser_Implicit",
            // client_id:"ea281e79e8d0a380d2ff",
            response_type: "id_token token",
            scope: "openid profile classprojects",
            response_mode: "fragment"
        });
    }

    login() {
        this._is4UserManager.signinRedirect();

    }
    logout() {
        this._is4UserManager.signoutRedirect();
    }
    completeLogin() {
        return this._is4UserManager.signinRedirectCallback().then(user => {
            this._user = user;
            this._userSubject.next(user);
            return user;
        })
    }
    completeLogout() {
        return this._is4UserManager.signoutRedirectCallback();
    }
    getUser(){
        return this._is4UserManager.getUser();
    }
}