import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { ContestDetailComponent } from './components/contest-detail/contest-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreaditComponent } from './components/creadit/creadit.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contest-details/:id', component: ContestDetailComponent},
  { path: 'candidate-detail/:id', component: CandidateDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'rechager', component: CreaditComponent},
  { path: 'change-password', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
