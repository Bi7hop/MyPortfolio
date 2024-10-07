import { Component } from '@angular/core';
import { LinksComponent } from "./links/links.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {

  currentLanguage: 'en' | 'de' = 'en';  
  isHovered: boolean = false;

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
}
