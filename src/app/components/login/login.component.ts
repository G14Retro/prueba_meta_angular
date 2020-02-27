import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../../services/login-services.service';

import { NgForm } from '@angular/forms';
import { userModel } from '../../models/user.model';
import Swal from "sweetalert2";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user:userModel;

  constructor( private loginService: LoginServicesService, private router:Router) { }

  ngOnInit() {
    this.user = new userModel
  }
  
  login(form: NgForm){
    if (form.invalid) {
      return;
    }
   Swal.fire({
     allowOutsideClick: false,
     icon:'info',
     title: 'Please Wait...'
   }
   );
    Swal.showLoading();
  this.loginService.login(this.user)
  .subscribe(resp=>{
    Swal.close();
    location.reload();
  },(error)=>{
    Swal.fire({
      icon: 'error',
      title: 'Authentication failed',
      text: error.error.message
    });

  });

  }

}
