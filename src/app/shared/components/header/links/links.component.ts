import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  constructor(private viewportScroller: ViewportScroller) {} 

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
