import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  id: any;
  candidate: any ;

  constructor(private activedRouter: ActivatedRoute, private app:  AppService) { }

  ngOnInit(): void {
    this.activedRouter.paramMap.subscribe((query: any) => {
      this.id = query.get('id');
      this.app.getCandidateById(this.id).subscribe((res: any) => {
        console.log(res.candidate_by_id);
        this.candidate = res.candidate_by_id;
      })
    });

  }

}
