import { Injectable }               from '@angular/core';
import { Http, Response,Headers, RequestOptions }           from '@angular/http';
// import { Observable }               from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/throw';

export class loginData{
    email:string;
    password:string;
    deviceIp:string;
    remember:boolean;
}


@Injectable()
export class AuthService{
    isLoggedIn;
 
    constructor(private _http:Http){
        
    }
    isLoogedOn(){
        var log = localStorage.getItem('username');
        if(log)
            return true; 
        return false;
    }

    checkLogin(form:loginData){
        if(form.email && form.password)
            return true;
        return false;    
    }

    logIn(email){
            localStorage.setItem("username",email);
    }

    logOut(){
        localStorage.removeItem("username");
        this.isLoggedIn = false;
        return {
            status:true,
            success:"Logged Out Successfully"
        };
    }

    

}






