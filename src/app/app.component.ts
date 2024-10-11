import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SkillSectionComponent } from "./skill-section/skill-section.component";
import { PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from "./references/references.component";
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    MainContentComponent,
    AboutMeComponent,
    CommonModule,
    FooterComponent,
    SkillSectionComponent,
    TranslateModule,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
