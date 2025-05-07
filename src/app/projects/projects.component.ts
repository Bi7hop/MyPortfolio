import { CommonModule } from '@angular/common';
import { Component, Renderer2, ChangeDetectorRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showProjectInfo: boolean = false;
  selectedProject: any = null;
  infoImageUrl: string | null = null;
  hoveredImageUrl: string | null = null;
  currentIndex: number = 0;
  showProjects: boolean = true;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'project-info.subtitle',
      githubUrl: 'https://github.com/Bi7hop/Join',
      livetestUrl: 'https://join.marcel-menke.info/login.html',
      description: 'project-info.description',
      techStack: 'JavaScript | HTML | CSS | Firebase',
      technologies: [
        { iconUrl: '../../assets/icons/projects/angular.png' },
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/firebase.png' },
      ],
      imageUrl: '../../assets/icons/projects/join.hover.png',
      infoUrl: '../../assets/icons/projects/join.big.png',
      inDevelopment: false
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      githubUrl: 'https://github.com/Bi7hop/El-polllo-loco',
      livetestUrl: 'https://elpolloloco.marcel-menke.info/index.html',
      subtitle: 'project-info.subtitle1',
      description: 'project-info.description1',
      techStack: 'HTML | CSS | JavaScript',
      technologies: [
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/javascript.png' },
      ],
      imageUrl: '../../assets/icons/projects/epl.hover.png',
      infoUrl: '../../assets/icons/projects/epl.big.png',
      inDevelopment: false
    },
    {
      number: '03',
      title: 'Terminal Portfolio',
      githubUrl: 'https://github.com/Bi7hop/matrix-portfolio',
      livetestUrl: 'https://portfolio.marcel-menke.info',
      subtitle: 'project-info.subtitle2',
      description: 'project-info.description2',
      techStack: 'Angular | HTML | CSS | TypeScript',
      technologies: [
        { iconUrl: '../../assets/icons/projects/angular.png' },
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/typescript.png' },
      ],
      imageUrl: '../../assets/icons/projects/terminal.png',
      infoUrl: '../../assets/icons/projects/terminal1.png',
      inDevelopment: true
    },
    // Neues Projekt: Finanz Buddy (in Entwicklung – daher ausgegraut)
    {
      number: '04',
      title: 'Finanz Buddy',
      githubUrl: 'https://github.com/Bi7hop/Finanz_Buddy',
      livetestUrl: '',
      subtitle: 'project-info.subtitle3',
      description: 'project-info.description3',
      techStack: 'Angular | TypeScript | SCSS',
      technologies: [
        { iconUrl: '../../assets/icons/projects/angular.png' },
        { iconUrl: '../../assets/icons/projects/typescript.png' },
        { iconUrl: '../../assets/icons/projects/html.png' },
      ],
      imageUrl: '../../assets/icons/projects/finanz.png',
      infoUrl: '../../assets/icons/projects/finanz1.png',
      inDevelopment: true
    },
    // Neues Projekt: Job Hunter (in Entwicklung – daher ausgegraut)
    {
      number: '05',
      title: 'Job Tracker',
      githubUrl: 'https://github.com/Bi7hop/JobTracker',
      livetestUrl: '',
      subtitle: 'project-info.subtitle4',
      description: 'project-info.description4',
      techStack: 'Angular | HTML | Tailwind | JavaScript',
      technologies: [
        { iconUrl: '../../assets/icons/projects/angular.png' },
        { iconUrl: '../../assets/icons/projects/html.png' },
        { iconUrl: '../../assets/icons/projects/css.png' },
        { iconUrl: '../../assets/icons/projects/javascript.png' },
      ],
      imageUrl: '../../assets/icons/projects/jobtracker.png',
      infoUrl: '../../assets/icons/projects/jobtracker1.png',
      inDevelopment: true
    },
  ];

  next(event: Event): void {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
    this.cdr.detectChanges();
  }

  selectProject(project: any): void {
    this.currentIndex = this.projects.findIndex((p) => p === project);
    this.selectedProject = project;
    this.showProjectInfo = true;
  }

  closeProject(): void {
    this.selectedProject = null;
    this.showProjectInfo = false;
  }

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }
}
