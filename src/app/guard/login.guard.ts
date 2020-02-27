import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServicesService } from '../services/login-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor (private login:LoginServicesService, private router:Router){

  }
  canActivate(): boolean{
    if (!this.login.authAutenticated()) {   
      return true

    } else {
      this.router.navigateByUrl('/home');
    }
  }
  
}
