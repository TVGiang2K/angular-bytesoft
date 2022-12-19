import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.css']
})
export class VotingHistoryComponent implements OnInit {

  uProfile :any
  constructor(private app : AppService) { }

  ngOnInit(): void {
    this.uProfile = this.app.getUserProfile()
    
  }
}
