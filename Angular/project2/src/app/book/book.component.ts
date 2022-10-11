import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookservice:BookServiceService) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe()
  }

}
