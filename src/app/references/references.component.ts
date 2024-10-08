import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  currentIndex = 0;
  isHoveringPrevious = false;
  isHoveringNext = false;
  
  references = [
    { title: 'references.textbox1', name: 'Name' },
    { title: 'references.textbox2', name: 'Name' },
    { title: 'references.textbox3', name: 'Name' }
  ];

  constructor() { }

  previousButton() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.references.length - 1;
  }

  nextButton() {
    this.currentIndex = this.currentIndex < this.references.length - 1 ? this.currentIndex + 1 : 0;
  }

  onHoverPrevious(isHovering: boolean) {
    this.isHoveringPrevious = isHovering;
  }

  onHoverNext(isHovering: boolean) {
    this.isHoveringNext = isHovering;
  }
}
