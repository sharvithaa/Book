import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"book-list",component:BookListComponent},
  {path:"book/:id",component:BookDetailComponent},
  {path:"add-book",component:BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
