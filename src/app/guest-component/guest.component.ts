import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ProjectService } from '../projects-module/project.service';
import { AuthService } from '../auth-module/auth.service';
import { User } from 'oidc-client';

@Component({
    template: `<div style="position:center"><h1>Guest Projects</h1><h5>{{Projects}}</h5></div>`
})

export class GuestComponent implements OnInit {

    Projects: string;
    private _user: User;

    constructor(private _projectService: ProjectService, private _authService: AuthService) { }

    ngOnInit() {
        this._authService.getUser().then(user=>{
            this._projectService.getProjects(user).subscribe(data=>{
                this.Projects = data && data != null ? data.toString() : 'No data';
            });
        });
    }
}