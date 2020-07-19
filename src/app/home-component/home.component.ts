import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth-module/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    UserLoggedIn = null;

    constructor(private _authService: AuthService) { }

    ngOnInit() {
        
    }
    displayUserInfo(){
        //console.log(this._authService.getUserInfo());
    }
}