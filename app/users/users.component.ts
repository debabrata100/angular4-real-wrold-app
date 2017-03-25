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
    deleteUser(user){
        if(confirm("Are you sure you want to delete "+user.name)){
            var index = this.users.indexOf(user);
            //here splice method remove the element from the array from index position
            this.users.splice(index,1);
            this._usersService.deleteUser(user.id)
                .subscribe(null,
                          err=>{
                              alert("Could Not Delete the User");
                              //add the array element again back to the array
                              this.users.splice(index,0,user);
                          }  
                )

        }
    }
}