import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './services/book.service';
import { BookCardComponent } from './components/book-card/book-card.component';

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[];
  bookService = inject(BookService);

  constructor(){
    this.books = this.bookService.getBooks(); 
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
