import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { LoginComponent } from './component/login/login.component';



export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },

      { path: 'contrats', loadChildren: () => import('./component/contrats/contrats.module').then(m => m.ContratsModule) },
      { path: 'etudiants', loadChildren: () => import('./component/etudiants/etudiants.module').then(m => m.EtudiantsModule) },

      { path: 'equipes', loadChildren: () => import('./component/equipes/equipes.module').then(m => m.EquipesModule) },

    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
