import {Component,OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidators} from './basicValidators';
import {CanDeactivate,Router,RouteParams} from 'angular2/router';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    selector:'user-from',
    templateUrl:'app/users/user-form.component.html',
    providers:[UsersService]
})
export class UserFormComponent implements CanDeactivate,OnInit{
    form: ControlGroup;
    isSaving = false;
    title = "";
    user = new User();
    //user:User;
    constructor(
        fb:FormBuilder,
        private _router:Router,
        private _routeParams: RouteParams,
        private _userService: UsersService
        ){
        this.form = fb.group({
            name: ['',Validators.required],
            email: ['',BasicValidators.email],
            phone: [],
            address:fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }
    
    routerCanDeactivate(next,previous){
        if(this.form.dirty && !this.isSaving)
        return confirm("You have unsaved chnages. Are you sure you want to navigate away?");
        return true;
    }
    save(){
        this._userService.addUser(this.form.value)
        .subscribe(x=>{
            console.log(x);
            this.isSaving = true;
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
    }

    ngOnInit(){
        var id = this._routeParams.get("id");
        this.title = id ?"Edit User":"New User";
        if(!id)
        return;
        var user = this._userService.getUser(id)
        .subscribe(res=>this.user = res,
            response=>{
                if(response.status==404){
                    this._router.navigate(['NotFound']);
                }
            }
        );
        

        
    }

}