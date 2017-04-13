import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

//Router
import { RouterModule } from '@angular/router';

import {NavBarComponent} from './navbar.component';
import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';


import { AuthService } from '../user-login/auth.service';
//Route Guards
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
      NavBarComponent,
      SpinnerComponent,
      PaginationComponent
  ],
  
  exports:[
      NavBarComponent,
      SpinnerComponent,
      PaginationComponent
  ],
  providers: [
    AuthService,
    PreventUnsavedChangesGuard
  ],
})
export class SharedModule { }
