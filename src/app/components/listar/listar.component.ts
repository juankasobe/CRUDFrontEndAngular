import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentarios';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  listaComentarios:Comentario[] = [
    {titulo:'Angular',creador:'Juan',fechaCreacion:new Date(),texto:'Crear Crud en Angular'},
    {titulo:'Bootstrap',creador:'Pedro',fechaCreacion:new Date(),texto:'Angular'}
  ]
}
