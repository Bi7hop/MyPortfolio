import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'main-content', component: MainContentComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' }, 
];
