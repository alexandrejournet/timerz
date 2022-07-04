import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', loadComponent: () => import('./pages/home/home.component').then(comp => comp.HomeComponent)
  },
  {
    path: 'timer', loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/timer-home/timer-home.component').then(comp => comp.TimerHomeComponent)
      }
    ],
    data: {
      showToolbar: false
    }
  },
  {
    path: 'utilitaires',
    loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/utilitaires/utilitaires.component').then(comp => comp.UtilitairesComponent)
      }
    ],
    data: {
      showToolbar: false
    }
  },
  {
    path: 'create', loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/creation/creation.component').then(comp => comp.CreationComponent)
      }
    ],
    data: {
      showToolbar: true
    }
  },
  {
    path: 'session',
    loadComponent: () => import('./pages/session/session.component').then(comp => comp.SessionComponent)
  },
  {
    path: 'recap', loadComponent: () => import('./pages/recap/recap.component').then(comp => comp.RecapComponent)
  },
  {
    path: 'params', loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/parametres/parametres.component').then(comp => comp.ParametresComponent)
      }
    ],
    data: {
      showToolbar: false
    }
  },
  {
    path: 'list', loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
      {
        path: '', loadComponent: () => import('./pages/list/list.component').then(comp => comp.ListComponent)
      }
    ],
    data: {
      showToolbar: false
    }
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
