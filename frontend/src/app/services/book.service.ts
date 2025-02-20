import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl='http://localhost:4000/api/books';

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id:string):Observable<Book>{
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  createbook(book:Book):Observable<Book>{
    return this.http.post<Book>(this.apiUrl,book);
  }

  updateBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
