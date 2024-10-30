import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyComponent},
];
