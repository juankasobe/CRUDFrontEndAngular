import { Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { VerComponent } from './components/ver/ver.component';

export const routes: Routes = [
    {path:"" , component: ListarComponent},
    {path:"agregarComentario" , component: AgregarEditarComponent},
    {path:"editar/:id" , component: AgregarEditarComponent},
    {path:"ver/:id" , component:VerComponent},
    {path:"**" , redirectTo:'',pathMatch:'full'},
];
