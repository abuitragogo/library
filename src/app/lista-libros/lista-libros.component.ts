import { Component } from '@angular/core';
import { Libro } from '../model/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  libros: Libro[] | any;

  constructor(private librosService: BookService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.librosService.getBooks().subscribe(libros => {
      this.libros = libros;
    });
  }

  verDetalle(id: number) {
    // Implementar lógica para ver detalle del libro
  }

  editarLibro(id: number) {
    // Implementar lógica para editar el libro
  }

  eliminarLibro(id: number) {
    // Implementar lógica para eliminar el libro
  }
}
