import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { BasicValidators } from './basic-validators';

@Component({
    templateUrl:'./user-login.component.html',
    styleUrls:[`./user-login-style.css`]
})

export class UserLoginComponent{

    form:FormGroup; 
    loginError = false;
    constructor( 
        fb:FormBuilder,
        private _router:Router,
        private _auth:AuthService
    ){
        this.form = fb.group({
            email:['',BasicValidators.validEmail],
            password:['',BasicValidators.validPassword]
        })
    }

    login(){
        var email = this.form.controls.email.value;
        var password = this.form.controls.password.value; 

       var response = this._auth.checkLogin(this.form.value);

       if(response){
           this._auth.logIn(email);
           this._router.navigate(['']);
       }
        else 
         this.loginError = true;
        
        
        //console.log(this.log);
        // if(login.status)
        //     this._router.navigate(['']);
    }



}