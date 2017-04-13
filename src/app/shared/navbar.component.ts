import {Component,OnInit,Input,DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../user-login/auth.service';

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar-style.css']
})
export class NavBarComponent implements OnInit,DoCheck{ 
    isLoggedIn;
    constructor(
        private _auth:AuthService,
        private _router:Router
        ){}

    ngDoCheck(){
        this.isLoggedIn = this._auth.isLoogedOn();
    }    

    ngOnInit(){
        //this.isLoggedIn = this._auth.isLoggedIn;
        //localStorage.removeItem('username');
        
    }
    logOut(){
        this._auth.logOut();
        this.isLoggedIn = this._auth.isLoggedIn;
        this._router.navigate(['/user-login']);
    }
}