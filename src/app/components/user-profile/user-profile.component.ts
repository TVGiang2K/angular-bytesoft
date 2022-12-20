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
  history_recharge: any = [];
  created_time:any;
  
  created_date:any;
  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.profile()
    this.historyVote()
    this.historyRecharge()
  }

  profile(){
    this.app.getProfile().subscribe((res:any) => {
      this.info = res.user
    })
    this.date = new Date(this.info.createdAt)
  }

  historyVote(){
    this.app.historyVote().subscribe((res:any) => {
      this.history_Vote = res
      for(let item of res){

        this.created_time = new Date(item.created_time).toLocaleDateString('zh-Hans-CN')
      }
    })
  }
  historyRecharge(){
    this.app.get_recharge_history().subscribe((res:any) => {
      console.log(res.data);
      
      this.history_recharge = res.data
      for(let item of res.data){
        this.created_date = new Date(item.created_date).toLocaleDateString('zh-Hans-CN') 
      }
    })
  }



}
