import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes.routes';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BookNewComponent } from './components/books/book-new/book-new.component';
import { NewAuthorsComponent } from './components/authors/new-authors/new-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BooksComponent,
    AuthorsComponent,
    BookNewComponent,
    NewAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES,{useHash:false}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
