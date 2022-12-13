import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContestsComponent } from './components/contests/contests.component';
import { ContestDetailComponent } from './components/contest-detail/contest-detail.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContestsComponent,
    ContestDetailComponent,
    CandidateComponent,
    CandidateDetailComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
