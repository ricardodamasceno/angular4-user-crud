import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'list-users', component: ListUsersComponent},
  {path: 'home', component: ListUsersComponent},
  {path: '**', component: ListUsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
