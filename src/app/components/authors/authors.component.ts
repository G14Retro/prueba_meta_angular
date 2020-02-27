import { Component, OnInit } from '@angular/core';
import { authorInterface } from '../../interfaces/author.interface';
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: []
})
export class AuthorsComponent implements OnInit {
  authors:authorInterface[] =[]
  constructor(private auth:LoginServicesService) { 
    this.auth.getAuthor().subscribe((data:any)=>{
      this.authors = data;
    });
  }

  ngOnInit() {
  }

}
