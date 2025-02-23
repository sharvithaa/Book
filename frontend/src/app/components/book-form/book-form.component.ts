import { Component } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  title: string = '';
  author: string = '';
  genre: string = '';  // ✅ Add this property
  publishedYear: number | null = null;  // ✅ Add this property

  saveBook() {
    const newBook = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      publishedYear: this.publishedYear
    };
    console.log('Book saved:', newBook);
  }
}
