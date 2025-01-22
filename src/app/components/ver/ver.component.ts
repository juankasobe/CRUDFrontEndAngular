import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../interfaces/comentarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})

export class VerComponent implements OnInit  {
  id : number;
  comentario : Comentario | undefined;
  constructor(private aroute : ActivatedRoute , private _comentarioService : ComentarioService) {
    this.id = +this.aroute.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.getComentario(this.id);
  }
  getComentario(id : number) {
    return this._comentarioService.getComentario(id).subscribe(data =>
      { this.comentario = data; });
  }
}
