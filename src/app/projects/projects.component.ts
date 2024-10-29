import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  showProjectInfo: boolean = false;
  selectedProject: any = null;
  infoImageUrl: string | null = null;
  hoveredImageUrl: string | null = null;
  currentIndex: number = 0;
  showProjects: boolean = true;

  constructor(private renderer: Renderer2) {}
  
  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'project-info.subtitle',
      githubUrl: 'https://github.com',
      livetestUrl: 'https://join.marcel-menke.info/login.html',
      description: 'project-info.description',
      technologies: [
        { iconUrl: '../../assets/icons/projects/angular.png' },
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/firebase.png' }
      ],
      imageUrl: '../../assets/icons/projects/join.hover.png',
      infoUrl: '../../assets/icons/projects/join.big.png'
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      githubUrl: 'https://github.com/Bi7hop/El-polllo-loco',
      livetestUrl: 'https://elpolloloco.marcel-menke.info/index.html',
      subtitle: 'project-info.subtitle1',
      description: 'project-info.description1',
      technologies: [
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/javascript.png' }
      ],
      imageUrl: '../../assets/icons/projects/epl.hover.png',
      infoUrl: '../../assets/icons/projects/epl.big.png'
    }
  ]

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }

  selectProject(project: any): void {
    this.selectedProject = project;
    this.showProjectInfo = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeProject(): void {
    this.selectedProject = null;
    this.showProjectInfo = false;
    this.renderer.removeClass(document.body, 'no-scroll'); 
  }

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }

}
