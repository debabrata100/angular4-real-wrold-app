import {Component,DoCheck} from '@angular/core';
import { AuthService } from './user-login/auth.service';
@Component({
    templateUrl:'./home.component.html',
    styleUrls:['./home.style.css']
})
export class HomeComponent implements DoCheck{
    isLoggedIn;
    constructor(
        private _auth:AuthService
        ){}

    ngDoCheck(){
        this.isLoggedIn = this._auth.isLoogedOn();
    }  
}