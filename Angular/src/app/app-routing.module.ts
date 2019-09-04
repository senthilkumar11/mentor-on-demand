import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { CreateTechnologyComponent } from './admin/create-technology/create-technology.component';
import { ListTechnologyComponent } from './admin/list-technology/list-technology.component';
import { ListTrainingComponent } from './admin/list-training/list-training.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminProfileComponent},
  {path:'mentorregister',component:MentorRegisterComponent},
  {path:'addtech',component:CreateTechnologyComponent},
  {path:'listtech',component:ListTechnologyComponent},
  {path:'listtraining',component:ListTrainingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
