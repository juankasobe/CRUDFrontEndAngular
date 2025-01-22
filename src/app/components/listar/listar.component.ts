import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentarios';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ComentarioService } from '../../services/comentario.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent {
  listaComentarios: Comentario[] = [];
  constructor(private _comentarioServicio: ComentarioService) {}
  ngOnInit() {
    this.getComentarios();
  }
  //Funcion para obtener los comentarios
  getComentarios() {
    this._comentarioServicio.getListComentarios().subscribe(
      (data) => {
        this.listaComentarios = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarComentario(id: any) {
    console.log(id);
    if (id !== undefined) {
      this._comentarioServicio.deleteComentario(id).subscribe({
        next: (response) => {
          console.log(`Comentario con id ${id} eliminado`, response);
          this.getComentarios(); // Actualiza la lista de comentarios después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar el comentario:', error);
        },
      });
    }
  }
}
