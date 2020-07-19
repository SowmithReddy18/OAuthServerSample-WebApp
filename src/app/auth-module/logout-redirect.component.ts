import { Component, OnInit } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    template: `<div></div>`
})
export class LogOutRedirectComponent implements OnInit {
    constructor(private _authService: AuthService, private _router: Router) { }

    ngOnInit() {
        this._authService.completeLogout();
        this._router.navigate(['/home'], { replaceUrl: true });
    }
}