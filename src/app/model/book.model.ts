export interface Libro {
  id_libro: number;
  titulo: string;
  autor: string;
  anio_publicacion: number;
  genero: {
    id_generp:number;
    nombre:string
  };
}
