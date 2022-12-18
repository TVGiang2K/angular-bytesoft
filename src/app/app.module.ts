import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContestDetailComponent } from './components/contest-detail/contest-detail.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { CreaditComponent } from './components/creadit/creadit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContestDetailComponent,
    CandidateDetailComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    AboutComponent,
    CreaditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
