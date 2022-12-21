import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formLogin : FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required),
  });

  constructor(private app: AppService) { }

  get f(){
    return this.formLogin.controls
  }

  ngOnInit(): void {
  }

  onLogin(){    
    this.app.checkLogin(this.formLogin.value).subscribe((res:any)=>{
      console.log(res);
      if(res.account){
        // console.log(res);
        localStorage.setItem('profile', JSON.stringify(res.account))
        location.assign('/')
      }else{
        location.assign('/login')
      }
    });
  }

}
