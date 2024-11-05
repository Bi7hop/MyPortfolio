import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentLanguage: 'en' | 'de' = 'en';  
  isHovered: boolean = false;
  scrollPosition = 0;
  isMenuOpen = false;
  private targetSection: string | null = null;

  constructor(private translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.initializeLanguage();
    this.subscribeToNavigation();
  }

  initializeLanguage() {
    if (this.isBrowserEnvironment() && window.localStorage) {
      this.currentLanguage = localStorage.getItem('language') as 'en' | 'de' || 'en';
    }
    this.translate.use(this.currentLanguage);
  }

  subscribeToNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.targetSection) {
          this.scrollToSection(this.targetSection);
          this.targetSection = null;
        }
      }
    });
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
    if (this.isBrowserEnvironment() && window.localStorage) {
      localStorage.setItem('language', this.currentLanguage);
    }
  }

  isBrowserEnvironment(): boolean {
    return typeof window !== 'undefined';
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
    const isMobile = window.innerWidth <= 768;
    let sectionId = section;
  
    if (section === 'about-me') {
      sectionId = isMobile ? 'about-me-mobile' : 'about-me-desktop';
    }
  
    if (this.router.url !== '/') {
      this.targetSection = sectionId;
      this.router.navigate(['/']);
    } else {
      this.scrollToSection(sectionId);
    }
  }
  

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
