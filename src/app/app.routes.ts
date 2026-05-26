import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', loadComponent: () => import('./screens/splash/splash.component').then(m => m.SplashComponent) },
  { path: 'login', loadComponent: () => import('./screens/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', loadComponent: () => import('./screens/home/home.component').then(m => m.HomeComponent) },
  { path: 'learn', loadComponent: () => import('./screens/learn/learn.component').then(m => m.LearnComponent) },
  { path: 'assistant', loadComponent: () => import('./screens/assistant/assistant.component').then(m => m.AssistantComponent) },
  { path: 'profile', loadComponent: () => import('./screens/profile/profile.component').then(m => m.ProfileComponent) },
];
