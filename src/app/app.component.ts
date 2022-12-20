import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* The class AppComponent implements the OnInit interface */
export class AppComponent implements OnInit{
  constructor(private app: AppService){}

  account:any;

  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.app.getProfile().subscribe((res:any)=>{
      this.account = res.user
    })
  }

  onLogout(){
    this.app.logout().subscribe((res:any)=>{
      
    })
    location.assign('/')
   
  }

  profile(){
    this.app.getProfile().subscribe((res:any)=>{
      this.account = res.user
    })
  }
}
