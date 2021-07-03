import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from '../app/login-component/login-component.component';
import { HomeComponentComponent } from '../app/home-component/home-component.component';

const routes : Routes = [
  { path : 'login', component : LoginComponentComponent, pathMatch : 'full'},
  { path : 'home', component : HomeComponentComponent, pathMatch : 'full'},
  { path : '**', redirectTo : 'login'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }