import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../../services/login-services.service';
import { bookInterface } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {
  books: bookInterface[]=[];
  constructor(private auth:LoginServicesService) { 
    this.auth.getBook().subscribe((data:any)=>{
      this.books = data;
    });
  }

  ngOnInit() {
  }
  
}
