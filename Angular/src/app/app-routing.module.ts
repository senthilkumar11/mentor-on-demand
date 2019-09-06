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
import { ProposalComponent } from './mentor/proposal/proposal.component';
import { RequestedProposalComponent } from './user/requested-proposal/requested-proposal.component';
import { UserTrainingComponent } from './user/user-training/user-training.component';
import { CompletedUserTrainingComponent } from './user/completed-user-training/completed-user-training.component';
import { CompletedMentorrTrainingComponent } from './mentor/completed-mentorr-training/completed-mentorr-training.component';
import { MentorTrainingComponent } from './mentor/mentor-training/mentor-training.component';
import { OngoingTrainingComponent } from './admin/ongoing-training/ongoing-training.component';
import { AuthGaurdService } from './service/auth-guard.service';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:ListTechnologyComponent,canActivate:[AuthGaurdService]},
  {path:'mentorregister',component:MentorRegisterComponent},
  {path:'addtech',component:CreateTechnologyComponent,canActivate:[AuthGaurdService]},
  {path:'listtech',component:ListTechnologyComponent,canActivate:[AuthGaurdService]},
  {path:'completedtraining',component:ListTrainingComponent,canActivate:[AuthGaurdService]},
  {path:'listmentor',component:ListMentorComponent,canActivate:[AuthGaurdService]},
  {path:'listuser',component:ListUserComponent,canActivate:[AuthGaurdService]},
  {path:'usertechlist',component:UserTechListComponent,canActivate:[AuthGaurdService]},
  {path:'searchmentor',component:SearchMentorComponent,canActivate:[AuthGaurdService]},
  {path:'proposal',component:ProposalComponent,canActivate:[AuthGaurdService]},
  {path:'requested',component:RequestedProposalComponent,canActivate:[AuthGaurdService]},
{path:'ongoingusertraining',component:UserTrainingComponent,canActivate:[AuthGaurdService]},
{path:'completeusertraining',component:CompletedUserTrainingComponent,canActivate:[AuthGaurdService]},
{path:'completementortraining',component:CompletedMentorrTrainingComponent,canActivate:[AuthGaurdService]},
{path:'ongoingmentortraining',component:MentorTrainingComponent,canActivate:[AuthGaurdService]},
{path:'ongoingtraining',component:OngoingTrainingComponent,canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
