import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Comentario } from '../../interfaces/comentarios';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-agregar-editar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './agregar-editar.component.html',
  styleUrl: './agregar-editar.component.css'
})
export class AgregarEditarComponent {
  agregarComentario : FormGroup;
  constructor(private fb:FormBuilder ) {
    this.agregarComentario = this.fb.group({
      titulo:['', Validators.required],
      creador:['', Validators.required],
      texto:['', Validators.required]
    })
  }
  agregar(){
    console.log(this.agregarComentario.status);
    const comentario:Comentario = {
      titulo : this.agregarComentario.get('titulo')?.value,
      creador : this.agregarComentario.get('creador')?.value,
      texto : this.agregarComentario.get('texto')?.value,
      fechaCreacion : new Date
    }
    console.log(comentario)
  }  
}
