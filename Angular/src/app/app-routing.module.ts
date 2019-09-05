import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { CreateTechnologyComponent } from './admin/create-technology/create-technology.component';
import { ListTechnologyComponent } from './admin/list-technology/list-technology.component';
import { ListTrainingComponent } from './admin/list-training/list-training.component';
import { ListMentorComponent } from './admin/list-mentor/list-mentor.component';
import { LogoutComponent } from './logout/logout.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UserTechListComponent } from './user/user-tech-list/user-tech-list.component';
import { SearchMentorComponent } from './user/search-mentor/search-mentor.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:ListTechnologyComponent},
  {path:'mentorregister',component:MentorRegisterComponent},
  {path:'addtech',component:CreateTechnologyComponent},
  {path:'listtech',component:ListTechnologyComponent},
  {path:'listtraining',component:ListTrainingComponent},
  {path:'listmentor',component:ListMentorComponent},
  {path:'listuser',component:ListUserComponent},
  {path:'usertechlist',component:UserTechListComponent},
  {path:'searchmentor',component:SearchMentorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
