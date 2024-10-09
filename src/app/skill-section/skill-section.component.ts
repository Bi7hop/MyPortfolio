import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent implements AfterViewInit {

  isPopupVisible: boolean = false;

  Frontendskills = [
    { 'src': '../../assets/icons/HTML.png', 'text': 'HTML' },
    { 'src': '../../assets/icons/CSS.png', 'text': 'CSS' },
    { 'src': '../../assets/icons/JavaScript.png', 'text': 'JavaScript' },
    { 'src': '../../assets/icons/MaterialDesign.png', 'text': 'Material Design' },
    { 'src': '../../assets/icons/TypeScript.png', 'text': 'TypeScript' },
    { 'src': '../../assets/icons/Angular.png', 'text': 'Angular' },
    { 'src': '../../assets/icons/Firebase.png', 'text': 'Firebase' },
    { 'src': '../../assets/icons/Gitskill.png', 'text': 'GIT' },
    { 'src': '../../assets/icons/Rest-Api.png', 'text': 'Rest-Api' },
    { 'src': '../../assets/icons/Scrum.png', 'text': 'Scrum' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 2000,   
        offset: 0,        
        once: false       
      });
    }
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
