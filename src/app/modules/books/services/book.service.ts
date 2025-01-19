import { Injectable } from "@angular/core";
import { Book } from "../model/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    protected books: Book[] = [
        {
            id: 1,
            title: "Harry potter",
            author: "J.K. Rowling",
            year: 2000
        },
        {
            id: 2,
            title: "El principito",
            author: "Desconocido",
            year: 2002
        }
    ]

    //Mandar al back
    getBooks(): Book[]{
        return this.books;
        

    }
}