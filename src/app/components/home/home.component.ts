import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showContest: any = [];
  totalContest: any = '';

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.homeContest().subscribe(  (res: any) =>{
        this.showContest = res.contests;
    })
  }

  open(){
    
  }
}
