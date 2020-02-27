import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  auth: boolean;
  constructor(private login:LoginServicesService) { }

  ngOnInit() {
  }

  
  autenticated(){
    if (this.login.authAutenticated()) {
      this.auth = true
    } else {
      this.auth = false
    }
    console.log(this.auth);
  }

}
