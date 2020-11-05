import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
//componets configuracion de componentes
import{TaskComponent}from './components/task/task.component';
import{PrivateTaskComponent}from './components/private-task/private-task.component';
import{SigninComponent}from './components/signin/signin.component';
import{SigupComponent}from './components/sigup/sigup.component';
import{InicioComponent} from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',//redirecionar a la pagina de tareas
    pathMatch:'full'
  },
  {
    path:'task',
    component:TaskComponent
  },
  {
    path:'private-task',
    component:PrivateTaskComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'sigup',
    component:SigupComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
