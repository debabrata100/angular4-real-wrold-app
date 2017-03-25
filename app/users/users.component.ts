import {Component,OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {Observable} from 'rxjs/Observable';



@Component({
    selector:'users',
    templateUrl:'app/users/users.component.html',
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
                console.log(this.users);
            },
            null,
            ()=>{
                    
            }
        );
    }
}