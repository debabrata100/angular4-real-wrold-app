import {Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {User} from './user';
import { BasicVaildators } from './basic-validators';
import { ActivatedRoute, Router } from '@angular/router';
import {UsersService} from './users.service';

//Route Guards
import { FormComponent } from '../shared/prevent-unsaved-changes-guard.service';

@Component({
    templateUrl:'./user-form.component.html'
})
export class UserFormComponent implements FormComponent, OnInit{

    form:FormGroup; 
    user = new User();
    title = "New User";
	isSaving = false;
	

    constructor(
		fb:FormBuilder,
		private _route:ActivatedRoute,
		private _userService:UsersService,
		private _router: Router
		){

       this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicVaildators.validEmail],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
    }
	
	ngOnInit(){
		this._route.params.subscribe(params=>{
            var id = params['id'];
			this.title = id ?"Edit User":"New User";
			if(!id)
				return;
				var user = this._userService.getUser(id)
				.subscribe(user=>this.user = user,
					response=>{
						if(response.status==404){
							this._router.navigate(['not-found']);
						}
					}
        	);
            
        })
	}


	save(){
        var result;

        //By this time this.user has either a blank User Object or with User Values returned from server when Editing
        if(this.user.id)
           result = this._userService.updateUser(this.user);
        else   
        result = this._userService.addUser(this.user);

        result.subscribe(x=>{
            // console.log(x);
            this.isSaving = true;
            // this.form.markAsPristine();
           // this._router.navigate(['users']);
        });
    }

}