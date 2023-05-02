import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login/:id',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dogs',
    loadChildren: () => import('./pages/dogs/dogs.module').then( m => m.DogsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'cal2-modal',
    loadChildren: () => import('./pages/cal2-modal/cal2-modal.module').then( m => m.Cal2ModalPageModule)
  },
  {
    path: 'walker-profile',
    loadChildren: () => import('./pages/walker-profile/walker-profile.module').then( m => m.WalkerProfilePageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'walker',
    loadChildren: () => import('./walker/walker.module').then( m => m.WalkerPageModule)
  },
  {
    path: 'walker1',
    loadChildren: () => import('./walker1/walker1.module').then( m => m.Walker1PageModule)
  },
  {
    path: 'walker2',
    loadChildren: () => import('./walker2/walker2.module').then( m => m.Walker2PageModule)
  },
  {
    path: 'walker3',
    loadChildren: () => import('./walker3/walker3.module').then( m => m.Walker3PageModule)
  },
  {
    path: 'walker4',
    loadChildren: () => import('./walker4/walker4.module').then( m => m.Walker4PageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
