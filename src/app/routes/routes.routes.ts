import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { BooksComponent } from '../components/books/books.component';
import { AuthorsComponent } from '../components/authors/authors.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginGuard } from '../guard/login.guard';
import { BookNewComponent } from '../components/books/book-new/book-new.component';
import { NewAuthorsComponent } from '../components/authors/new-authors/new-authors.component';


export const ROUTES: Routes = [
    {path:'login',component: LoginComponent, canActivate:[LoginGuard]},
    {path:'home',component: HomeComponent,canActivate:[AuthGuard]},
    {path:'books',component:BooksComponent, canActivate:[AuthGuard]},
    {path:'newBook', component: BookNewComponent,canActivate:[AuthGuard]},
    {path:'authors',component: AuthorsComponent, canActivate:[AuthGuard]},
    {path:'newAuthor', component: NewAuthorsComponent,canActivate:[AuthGuard]},
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: '**', pathMatch: 'full', redirectTo: 'login'},
]