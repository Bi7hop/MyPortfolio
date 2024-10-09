import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,
    AboutMeComponent,
    SkillSectionComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent, HeroComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
