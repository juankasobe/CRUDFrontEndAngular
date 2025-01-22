import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Comentario } from '../../interfaces/comentarios';
import { CommonModule } from '@angular/common';
import { ComentarioService } from '../../services/comentario.service';
@Component({
  selector: 'app-agregar-editar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './agregar-editar.component.html',
  styleUrl: './agregar-editar.component.css'
})
export class AgregarEditarComponent {
  agregarComentario : FormGroup;
  titulo = "Agregar";
  id : number;
  comentario: Comentario | undefined;
  constructor(private fb:FormBuilder ,
              private _comentarioServicio:ComentarioService,
              private router:Router,
              private aRoute:ActivatedRoute) {
    this.agregarComentario = this.fb.group({
      titulo:['', Validators.required],
      creador:['', Validators.required],
      texto:['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.esEditar();
  }
  esEditar(){
    if(this.id !== 0){
      this.titulo = "Editar";
      this._comentarioServicio.getComentario(this.id).subscribe(data => {
        this.comentario = data;
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          creador: data.creador,
          texto: data.texto
        })
      }, error => {
        console.log(error);
      } )
    }
  }
  agregarEditar(){
    if(this.comentario == undefined){
      console.log(this.agregarComentario.status);
      const comentario:Comentario = {
        titulo : this.agregarComentario.get('titulo')?.value,
        creador : this.agregarComentario.get('creador')?.value,
        texto : this.agregarComentario.get('texto')?.value,
        fechaCreacion : new Date
      }
      console.log(comentario)
      this._comentarioServicio.postComentario(comentario).subscribe(data => {
        console.log(data);
        this.router.navigate(['/'])}, 
        error => {console.log(error)});  
    }else{
      const comentario:Comentario = {
        id : this.comentario.id,
        titulo : this.agregarComentario.get('titulo')?.value,
        creador : this.agregarComentario.get('creador')?.value,
        texto : this.agregarComentario.get('texto')?.value,
        fechaCreacion : this.comentario.fechaCreacion
      }
      this._comentarioServicio.updateComentario(this.id, comentario).subscribe(data => {
        this.router.navigate(['/'])}, 
        error => {console.log(error)});
    }
  }
}