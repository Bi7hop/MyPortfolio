import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {

  currentLanguage: 'en' | 'de' = 'en';  
  isHovered: boolean = false;
  scrollPosition = 0;
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
  }

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  getButtonImage(): string {
    if (this.currentLanguage === 'en') {
      return this.isHovered ? 'assets/icons/eng_btn_hover.png' : 'assets/icons/eng_btn.png';
    } else {
      return this.isHovered ? 'assets/icons/ger_btn_hover.png' : 'assets/icons/ger_btn.png';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get menuIcon() {
    return this.isMenuOpen ? 'assets/icons/burgermenu.hover.png' : 'assets/icons/burgermenu.png';
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
