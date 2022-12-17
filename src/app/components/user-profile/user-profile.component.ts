import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  info: any = {};
  date: any;
  history_Vote: any = [];
  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.profile()
    this.historyVote()
  }

  profile(){
    this.info = this.app.getAccountInfor()
    this.date = new Date(this.info.createdAt)
  }

  historyVote(){
    this.app.historyVote().subscribe((res:any) => {
      this.history_Vote = res
      console.log(res)
    })
  }

}
