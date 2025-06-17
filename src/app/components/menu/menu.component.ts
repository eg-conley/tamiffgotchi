import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Output() penChoice = new EventEmitter<string>();

  constructor(private router: Router, private themeService: ThemeService) {}

  // default properties
  newGameToggle: boolean = false;
  loadGameToggle: boolean = false;
  count: number = 0;

  penStateToggle: { [key in 'penOne' | 'penTwo' | 'penThree']: boolean } = {
    penOne: false,
    penTwo: false,
    penThree: false,
  };

  toggleTheme() {
    console.log('theme button clicked');
    const themes = ['default', 'blue', 'orange'];
    this.count = this.count + 1;
    console.log(this.count);
    const theme = themes[this.count % themes.length];
    console.log(theme);
    this.themeService.setTheme(theme);
  }

  onNewGameClick() {
    this.newGameToggle = !this.newGameToggle;
    // TO DO: logic to start a new game can be added here
  }

  onLoadGameClick() {
    this.loadGameToggle = !this.loadGameToggle;
    // TO DO: logic to load the game can be added here
  }

  onPenOptionClick(penChoice: 'penOne' | 'penTwo' | 'penThree') {
    // creates a new game
    if (this.newGameToggle && !this.loadGameToggle) {
      this.penStateToggle[penChoice] = true; // set pen state as active
      console.log(`Starting new game with ${penChoice}`);
      switch (penChoice) {
        case 'penOne':
          this.router.navigate(['/pen-one']);
          break;
        case 'penTwo':
          this.router.navigate(['/pen-two']);
          break;
        case 'penThree':
          this.router.navigate(['/pen-three']);
          break;
        default:
          console.error('Invalid pen selection');
          this.router.navigate(['/']);
      }
    } else if (this.loadGameToggle && !this.newGameToggle) {
      // TO DO: add logic to populate pen if game already exists
      // loads already saved game
      console.log(`Loading game with ${penChoice}`);
      switch (penChoice) {
        case 'penOne':
          this.router.navigate(['/pen-one']);
          break;
        case 'penTwo':
          this.router.navigate(['/pen-two']);
          break;
        case 'penThree':
          this.router.navigate(['/pen-three']);
          break;
        default:
          console.error('Invalid pen selection');
          this.router.navigate(['/']);
      }
    }
  }
}
