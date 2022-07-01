import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', loadComponent: () => import('./pages/home/home.component').then(comp => comp.HomeComponent)
  },
  {
    path: 'create', loadComponent: () => import('./shared/layout/layout.component').then(comp => comp.LayoutComponent),
    children: [
        {
          path: '', loadComponent: () => import('./pages/creation/creation.component').then(comp => comp.CreationComponent)
        }
      ]
  },
  {
    path: 'session', loadComponent: () => import('./pages/session/session.component').then(comp => comp.SessionComponent)
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
