import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalPortalComponent } from '@sweetalert2/ngx-sweetalert2/lib/swal-portal.component';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  checkErrors: any;
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

  vote(idCandidate:number) {
    let qttVote:any = document.getElementById('qttVote');
    this.app.action_vote_candidate(idCandidate,qttVote.value).subscribe((res:any) => {
      if (res.action == true){
        Swal.fire({
          title:  'successful vote',
          icon: 'success'
        })
        // location.assign('/home');
      } else if (res.action == false){
        Swal.fire({
          title:  'You can not vote because you do not have money, you need to pay more money',
          icon: 'error'
        })
      }
      
    })
  }

}
