import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder} from 'angular2/common';



@Component({
    selector:'user-from',
    templateUrl:'app/users/user-form.component.html',
})
export class UserFormComponent {
    form:ControlGroup;
    constructor(fb:FormBuilder){
        this.form = fb.group({
            name:[],
            email:[],
            phone:[],
            address:fb.group({
                street:[],
                suite:[],
                city:[],
                zipcode:[]
            })
        })
    }
   
}