import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title1: string = "Books"
  errorMessage!: string
  books!: Book[]
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;
  
  constructor(private bookService:BookService) { }
  getBooks() {
    this.bookService.getBooks().subscribe(
      (book: any) => { console.log(book);this.books = book; },
      (error: any) => { this.errorMessage=error}
    )
  }
  addBook(bookId: string, name: string) {
    const id=parseInt(bookId)
    this.bookService.addBook({ id, name }).subscribe(
      (book: any) => {
        this.books.push(book)
        console.log(book)
      }
    )
  }
  updateBook(bookId: string, name: string) {
    let id=parseInt(bookId)
    this.bookService.updateBook({ id, name })
      .subscribe((book: any) => { console.log(book); this.books = book});
  }
  deleteBook(bookId:string) { 
    let id = parseInt(bookId)
    this.bookService.deleteBook(id).subscribe(
      (book: any) => { console.log(book); this.books = book}
    )
  }
  ngOnInit(): void {
    this.getBooks();
  }

}
