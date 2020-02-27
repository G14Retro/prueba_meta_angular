import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  auth:boolean;
  constructor(private login:LoginServicesService, private router: Router) { }

  ngOnInit() {
    this.auth = this.login.authAutenticated();
  }

  logout(){

    this.login.logout();

    location.reload();

  }

}
