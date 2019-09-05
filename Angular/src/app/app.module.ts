import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CreateTechnologyComponent } from './admin/create-technology/create-technology.component';
import { ListTechnologyComponent } from './admin/list-technology/list-technology.component';
import { ListTrainingComponent } from './admin/list-training/list-training.component';
import { ListMentorComponent } from './admin/list-mentor/list-mentor.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { ListPaymentHistoryComponent } from './admin/list-payment-history/list-payment-history.component';
import { LogoutComponent } from './logout/logout.component';
import { UserTechListComponent } from './user/user-tech-list/user-tech-list.component';
import { SearchMentorComponent } from './user/search-mentor/search-mentor.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    MentorRegisterComponent,
    HeaderComponent,
    NavBarComponent,
    CreateTechnologyComponent,
    ListTechnologyComponent,
    ListTrainingComponent,
    ListMentorComponent,
    ListUserComponent,
    ListPaymentHistoryComponent,
    LogoutComponent,
    UserTechListComponent,
    SearchMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
