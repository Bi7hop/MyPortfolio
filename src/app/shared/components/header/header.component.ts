import { Component } from '@angular/core';
import { LinksComponent } from "./links/links.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  // Korrektur: styleUrls (Plural)
})
export class HeaderComponent {
  // Zustand für das aktuelle Bild des Buttons
  currentLanguage: 'eng' | 'ger' = 'eng';
  isHovered: boolean = false;

  // Funktion, um den Button zu wechseln
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'eng' ? 'ger' : 'eng';
  }

  // Funktion, um Hover-Status zu setzen
  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  // Funktion, um das richtige Bild anzuzeigen
  getButtonImage(): string {
    if (this.currentLanguage === 'eng') {
      return this.isHovered ? 'assets/icons/eng_btn_hover.png' : 'assets/icons/eng_btn.png';
    } else {
      return this.isHovered ? 'assets/icons/ger_btn_hover.png' : 'assets/icons/ger_btn.png';
    }
  }
}
