import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.css']
})
export class ContestDetailComponent implements OnInit {

  id: any;
  name_contest: any;
  candidates: any = [];


  constructor(private activedRouter: ActivatedRoute, private app:  ApiService) { }

  ngOnInit(): void {
    this.activedRouter.paramMap.subscribe((query: any) => {
      this.id = query.get('id');
      this.app. getContestById(this.id).subscribe((res: any) => {

        console.log(res.candidate_by_contest); 
        this.name_contest = res.names;
        this.candidates = res.candidate_by_contest;
      })
    });
    

  }

}
