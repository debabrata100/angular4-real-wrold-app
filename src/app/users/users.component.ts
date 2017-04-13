import {Component,OnInit} from '@angular/core';
import {UsersService} from './users.service';



@Component({
    selector:'users',
    templateUrl:'./users.component.html'
})
export class UsersComponent implements OnInit{

    users: any[];
    id;
    
    constructor(
        private _usersService:UsersService
        ){}

    ngOnInit(){

         this._usersService.getUsers()
        .subscribe(res=>{
            this.users = res;
        });

        

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