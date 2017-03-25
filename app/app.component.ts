/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {NotFoundComponent} from './users/not-found.component';

import {PostsComponent} from './posts/posts.component';


@RouteConfig([
    {path:'/home',name:'Home',component:HomeComponent,useAsDefault:true},
    {path:'/users',name:'Users',component:UsersComponent},
    {path:'/users/new',name:'NewUser',component:UserFormComponent},
    {path:'/users/:id',name:'EditUser',component:UserFormComponent},
    {path:'not-found',name:'NotFound',component:NotFoundComponent},
    
    {path:'/posts',name:'Posts',component:PostsComponent},
    
    {path:'/*other',name:'Other',redirectTo:['Home']}
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
    
    `,
    directives:[NavBarComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(){
    }
}