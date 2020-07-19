import { Component, OnInit } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { GoogleAuthService } from './google-auth.service';

@Component({
    template: `<div></div>`
})
export class LoginRedirectComponent implements OnInit{
    constructor(private _authService: AuthService,
        private _router: Router){}

    ngOnInit(){
        this._authService.completeLogin().then(user=>{
            user && !user.expired ?
            this._router.navigate(['/home'], {replaceUrl: true}) :'';
        })
    }
}