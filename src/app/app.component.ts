import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends LoginComponent{
  data: any = 10;

  getdata(): void {
    console.log(this.data);
  }
}
