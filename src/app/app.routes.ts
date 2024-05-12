import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', redirectTo: '/libros', pathMatch: 'full' },
    { path: 'libros', component: ListaLibrosComponent },
    { path: 'libros/agregar', component: AgregarLibroComponent },
    { path: 'libros/editar/:id', component: EditarLibroComponent },
    { path: 'libros/detalle/:id', component: DetalleLibroComponent }
  ];
  
  export { routes };
