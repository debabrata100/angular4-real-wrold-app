import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//my modules
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UserLoginModule } from  './user-login/user-login.module';
import { PostsModule } from './posts/posts.module';



//components
import { HomeComponent }     from './home.component';
import { NotFoundComponent } from './not-found.component';




import { AppComponent } from './app.component';
import { appRoutes } from './app-routes';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // other imports here
    SharedModule,
    UsersModule,
    UserLoginModule,
    PostsModule
  ],
 declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
