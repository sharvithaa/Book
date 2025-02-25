import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: any[] = []; // Ensure this is an array

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:4000/api/books').subscribe(
      response => {
        console.log("API Response:", response); 
        if (response && response.data) {  
          this.books = response.data;
        } else {
          console.error("Unexpected API Response Format:", response);
        }
      },
      error => {
        console.error("API Error:", error); 
      }
    );
  }

  deleteBook(id: string) {
    this.http.delete(`http://localhost:4000/api/books/${id}`).subscribe(() => {
      this.books = this.books.filter(book => book._id !== id);
    });
  }
}