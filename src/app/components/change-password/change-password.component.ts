import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

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
  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.profile()
  }

  profile(){
    this.app.getProfile().subscribe((res:any) => {
      this.info = res.user
    })
    this.date = new Date(this.info.createdAt)
}
}
