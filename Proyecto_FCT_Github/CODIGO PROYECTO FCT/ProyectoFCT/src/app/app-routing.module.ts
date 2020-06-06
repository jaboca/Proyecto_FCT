import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./administracion/administracion.module').then( m => m.AdministracionPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'niveles',
    loadChildren: () => import('./niveles/niveles.module').then( m => m.NivelesPageModule)
  },
  {
    path: 'nivelprovider.ts',
    loadChildren: () => import('./NIvelprovider').then( m => m.NivelService)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'modificarusuario',
    loadChildren: () => import('./modificarusuario/modificarusuario.module').then( m => m.ModificarusuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
