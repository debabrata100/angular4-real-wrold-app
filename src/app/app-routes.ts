import { Routes } from '@angular/router';

import { HomeComponent }     from './home.component';
import { NotFoundComponent } from './not-found.component';

import { UserLoginComponent } from './user-login/user-login.component';
import {UserFormComponent} from './users//user-form.component';
import {UsersComponent} from './users//users.component';

import { PostsComponent } from './posts/posts.component';

import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

	//login
	{
		path:'user-login',
		component:UserLoginComponent
	}, 

    //users
   
	{ 
		path: 'users/new', 
		component: UserFormComponent,
		canDeactivate:[PreventUnsavedChangesGuard]
		
	},
	{
		path:'EditUser/:id',
		component: UserFormComponent,
		canDeactivate:[PreventUnsavedChangesGuard]
	},
    { path: 'users', component: UsersComponent },

	//posts
	{path:'posts',component:PostsComponent},






    { path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
];

