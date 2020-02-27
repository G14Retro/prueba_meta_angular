import { Component, OnInit } from '@angular/core';
import { authorModel } from '../../../models/author.model';
import { LoginServicesService } from '../../../services/login-services.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-authors',
  templateUrl: './new-authors.component.html',
  styles: []
})
export class NewAuthorsComponent implements OnInit {
  author:authorModel
  constructor( private auth:LoginServicesService, private router:Router) { }

  ngOnInit() {
    this.author = new authorModel;
  }
  saveAuthor(){
    this.auth.saveAuthor(this.author).subscribe(resp=>{
      Swal.fire({
        icon: 'success',
        title: 'saved successfully'
      });
    });
    this.router.navigateByUrl('/authors');

  }
}
