import { Injectable } from "@angular/core";
import { Book } from "../model/book";
import { HttpService } from "../../../providers/http.service";
import { Observable } from "rxjs";
import { ResponseApi } from "../../models/response.api";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    /* protected books: Book[] = [
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
    ] */

    constructor(private http: HttpService) { }

    getBooks(): Observable<ResponseApi<Book[]>> {
        return this.http.doGet<Book[]>('/books/');
    }
}