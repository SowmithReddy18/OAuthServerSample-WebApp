import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-module/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor(private _httpClient: HttpClient, private _authService: AuthService) { }

    getProjects(user) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${user.access_token}`);
        return this._httpClient.get('https://localhost:5001/api/projects', { headers: headers });
    }
}