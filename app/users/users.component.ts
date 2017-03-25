import {Component,OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';



@Component({
    selector:'users',
    templateUrl:'app/users/users.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[UsersService]
})
export class UsersComponent implements OnInit{
    users = [];
    constructor(private _usersService:UsersService){

    }

    ngOnInit(){
        this._usersService.getUsers()
            .subscribe(res=>{
                this.users = res;
            },
            null,
            ()=>{
                    
            }
        );
    }
}