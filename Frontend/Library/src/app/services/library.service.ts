import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  endPoint = "http://localhost:8080/api/books";
  endPointDelete = "http://localhost:8080/api/books/";

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.endPoint);
  }

  createBook(book: any, blob: any) {
    let formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData)
  }

  deleteBook(id: number) {
    let ruta = this.endPointDelete + id;
    return this.httpClient.delete(ruta)
  }

  updateBook(id: number, book: any, blob: any) {
    console.log("chachooooooooooooooooooooooo")
    console.log(book)
    let formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("file", blob);

    return this.httpClient.put(this.endPointDelete + id, formData)
  }
}
