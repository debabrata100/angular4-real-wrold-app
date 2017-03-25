import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidators} from './basicValidators';
import {CanDeactivate} from 'angular2/router';


@Component({
    selector:'user-from',
    templateUrl:'app/users/user-form.component.html',
})
export class UserFormComponent implements CanDeactivate{
    form: ControlGroup;
    constructor(fb:FormBuilder){
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
        if(this.form.dirty)
        return confirm("You have unsaved chnages. Are you sure you want to navigate away?");
        return true;
    }
}