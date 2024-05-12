import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro} from './model/book.model';
import { LibroCreate } from './model/LibroCreate';
import { LibroEdited } from './model/LibroEdited';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/v1/library';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Libro[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Libro> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBook(book: LibroCreate): Observable<LibroCreate> {
    return this.http.post<any>(this.apiUrl, book);
  }

  updateBook(book: LibroEdited): Observable<LibroEdited> {
    return this.http.put<LibroEdited>(this.apiUrl, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
