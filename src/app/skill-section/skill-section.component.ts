import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {

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


  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

}
