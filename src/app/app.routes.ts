import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BooksComponent } from './modules/books/books.component';
import { StudentsComponent } from './modules/students/students.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'Libros'
    },
    {
        path: 'students',
        component: StudentsComponent,
        title: 'Estudiantes'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
