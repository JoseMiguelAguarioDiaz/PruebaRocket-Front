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
  books: Book[] = [];
  errorMessage: string | null = null;
  bookService = inject(BookService);

  /* constructor(){
    this.books = this.bookService.getBooks() 
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  } */

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (response) => {
        if (!response.error) {
          this.books = response.data || [];
          console.log('Libros cargados:', this.books);
        } else {
          this.errorMessage = response.message || 'Error al cargar libros';
        }
      },
      error: (err) => {
        console.error('Error:', err);
        this.errorMessage = 'Error al comunicarse con el servidor';
      }
    });
  }
}
