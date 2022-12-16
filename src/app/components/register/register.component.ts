import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  file: any;

  checkErrors: any;
  formRegister: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(12)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]),
    phone: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  });

  getFile(event: any){
    this.file = event.target.files[0];
  }

  get fo(){    
    return this.formRegister.controls;
    
  }

  constructor(private app: AppService,
      private http: HttpClient
    ) { }

  ngOnInit(): void {
  }
  


  on_register() {
    if(this.formRegister.invalid){
      return;
    }    
    this.formRegister.value.avatar = this.file.name;
    console.log(this.formRegister.value);
    this.app.get_register(this.formRegister.value).subscribe((res: any) => {
      try {
        let formData = new FormData();
        formData.set('file', this.file);
        this.http.post("http://localhost:3000/upload", formData).subscribe((response)=> {})
        location.assign('/login');
      } catch (error) {
        this.checkErrors = 'user'
      }
    })
  }

}
