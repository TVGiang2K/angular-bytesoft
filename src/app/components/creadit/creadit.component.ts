import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-creadit',
  templateUrl: './creadit.component.html',
  styleUrls: ['./creadit.component.css']
})
export class CreaditComponent implements OnInit {
  qttmoney:any;
  user:any;
  constructor(private app:AppService) { }

  ngOnInit(): void {
  }


  add_money(money:number){
    this.qttmoney = money;
    console.log(this.qttmoney)
  }
  submit_money(){
    this.app.getProfile().subscribe((res:any) => {
      this.user = res.id
    })
    this.app.add_money(this.qttmoney,this.user).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
