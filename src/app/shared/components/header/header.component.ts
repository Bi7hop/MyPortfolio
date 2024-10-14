import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {

  currentLanguage: 'en' | 'de' = 'en';  
  isHovered: boolean = false;
  scrollPosition = 0;
  isMenuOpen = false;
  private targetSection: string | null = null;  // Für das Fragment speichern

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.use(this.currentLanguage);

    // Subscribe to navigation events to handle fragment scrolling
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Prüfe, ob ein Fragment (Sektion) gespeichert ist
        if (this.targetSection) {
          this.scrollToSection(this.targetSection);
          this.targetSection = null; // Fragment nach dem Scrollen löschen
        }
      }
    });
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

  navigateToSection(section: string) {
    if (this.router.url !== '/') {
      // Speichere das Ziel-Fragment und navigiere zur Landing Page
      this.targetSection = section;
      this.router.navigate(['/']);
    } else {
      // Wenn bereits auf der Landing Page, scrolle sofort
      this.scrollToSection(section);
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
