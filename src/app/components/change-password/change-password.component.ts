import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  info: any = {};
  date: any;
  history_Vote: any = [];
  created_time:any;
  // currentPass:any;
  formchange: FormGroup = new FormGroup({
    currentPass: new FormControl('', [Validators.required]),
    newPass: new FormControl('', [Validators.required]),
    confirmPass: new FormControl('', [Validators.required]),
  });
  constructor(private app: AppService) { }
  
  get fo(){    
    return this.formchange.controls;
    
  }

  ngOnInit(): void {
    
    this.profile()
  }

  profile(){
    this.app.getProfile().subscribe((res:any) => {
      
      this.info = res.user
    })
    this.date = new Date(this.info.createdAt)
    
}

changePass(){
  let dataPass = this.formchange.value
  let pro = this.info;
  this.app.changePass(dataPass).subscribe((res:any) => {
    let message = res.message
    let action = res.action
    // console.log(message);
    if(action == true){
      Swal.fire({
        title:  message,
        icon: 'success'
      })
    }
    else if(action == false){
      Swal.fire({
        title:  message,
        icon: 'error'
      })
    }
    
  })
}
}
