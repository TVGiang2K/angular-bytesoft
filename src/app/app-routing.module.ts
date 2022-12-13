import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ContestDetailComponent } from './components/contest-detail/contest-detail.component';
import { ContestsComponent } from './components/contests/contests.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contests', component: ContestsComponent},
  { path: 'contest-detail', component: ContestDetailComponent},
  { path: 'candidates', component: CandidateComponent},
  { path: 'candidate-detail', component: CandidateDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user-profile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
