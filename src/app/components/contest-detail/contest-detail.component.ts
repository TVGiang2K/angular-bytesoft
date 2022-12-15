import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.css']
})
export class ContestDetailComponent implements OnInit {
    
    // id: any = this.route.snapshot.paramMap.get('id')
    candidates_by_contest = new Array;
    name_contest: any;
  constructor(private app: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDefaitls()
  }

  getDefaitls(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.app.getContestById(id).subscribe((res: any) =>{
        this.name_contest = res.names
        this.candidates_by_contest = res.candidate_by_contest;
    });
  }
}