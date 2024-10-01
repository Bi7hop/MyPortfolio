import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
