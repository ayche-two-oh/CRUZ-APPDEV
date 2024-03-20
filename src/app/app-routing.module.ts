import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPage } from './another/another.page';
import { AuthenticationService } from './authentication.service';
import { ThirdPagePage } from './third-page/third-page.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'another',
    component: AnotherPage,
    canActivate:[AuthenticationService]
  },
  {
    path: 'third-page',
    component: ThirdPagePage,
    canActivate:[AuthenticationService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
