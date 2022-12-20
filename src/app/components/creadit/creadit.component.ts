import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';
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


  add_money(money:number ,e: any){
    this.qttmoney = money;
    // console.log(e)
    let btn = document.querySelectorAll(`.money`);
    let btn_event = document.querySelector(`#color${e}`)?.parentElement;
    console.log(btn_event?.getAttribute('class'))  
    if(btn_event?.getAttribute('class') == 'checked'){
    }
    btn_event?.classList.add('checked')

   
  }
  submit_money(){
    this.app.getProfile().subscribe((res:any) => {
      this.user = res.id
    })
    this.app.add_money(this.qttmoney,this.user).subscribe((res:any)=>{
      Swal.fire({
        title:  'Request sent to admin, pending',
        icon: 'success'
      })
      console.log(res);
    })
  }
}
