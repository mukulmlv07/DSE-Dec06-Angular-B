import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title1 = 'Demo on HttpClientModule';
  books!: Book[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;
  constructor(private bookService: BookService) { }
  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (books: any) => this.books = books,
      (error: any) => this.errorMessage = error as any);
  }
  addBook(bookId: string, name: string): void {
    let id=parseInt(bookId)
    this.bookService.addBook({id, name })
      .subscribe((book: any) => this.books.push(book));
  }
  updateBook(bookId: string, name: string): void {
    let id=parseInt(bookId)
    this.bookService.updateBook({ id, name })
      .subscribe((book: any) => this.books = book);
  }
  deleteBook(bookId: string): void {
    let id=parseInt(bookId)
    this.bookService.deleteBook(id)
      .subscribe((book: any) => this.books = book);
  }  
  ngOnInit(): void {
    this.getBooks();
  }
}
