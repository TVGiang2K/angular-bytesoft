import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showContest: any = [];
  totalContest: any = '';
  showCandidates: any = [];

  constructor(private app: ApiService) { }

  ngOnInit(): void {
    this.app.homeContestList().subscribe(  (res: any) =>{      
        this.showContest = res.contests;
    })

    this.app.homeCandidateList().subscribe(  (res: any) =>{
      console.log(res.candidates);
      
      this.showCandidates = res.candidates;
  })
  }

  open(){
    
  }
}
