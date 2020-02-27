import { Component, OnInit } from '@angular/core';
import { authorInterface } from '../../../interfaces/author.interface';
import { LoginServicesService } from '../../../services/login-services.service';
import { bookModel } from '../../../models/book.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styles: []
})
export class BookNewComponent implements OnInit {
  authors: authorInterface[]=[];
  books:bookModel;
  constructor( private auth:LoginServicesService, private router: Router) { 
    this.auth.getAuthor().subscribe((data:any)=>{
      this.authors = data;

    });
  }

  ngOnInit() {
    this.books = new bookModel;
  }
saveBook(){
  
  this.auth.saveBook(this.books).subscribe(resp=>{
    Swal.fire({
      icon: 'success',
      title: 'saved successfully'
    });

    this.router.navigateByUrl('/books');
  });
}
}
