import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Output() penChoice = new EventEmitter<string>();
  @Output() gameType = new EventEmitter<string>();

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private stateService: StateService,
  ) {}

  // default properties
  newGameToggle: boolean = false;
  loadGameToggle: boolean = false;
  count: number = 0;

  toggleTheme() {
    const themes = ['default', 'blue', 'orange'];
    this.count = this.count + 1;
    const theme = themes[this.count % themes.length];
    console.log(theme);
    this.themeService.setTheme(theme);
  }

  onNewGameClick() {
    this.newGameToggle = !this.newGameToggle;
  }

  onLoadGameClick() {
    this.loadGameToggle = !this.loadGameToggle;
  }

  onPenOptionClick(penChoice: 'penOne' | 'penTwo' | 'penThree') {
    const gameState = this.stateService.loadGameState(penChoice);

    // creates a new game
    if (this.newGameToggle && !this.loadGameToggle && !gameState) {
      this.stateService.saveGameState(penChoice, true); // set pen state as active
      this.gameType.emit('newGame');
      console.log(`Starting new game with ${penChoice}`);
      switch (penChoice) {
        case 'penOne':
          this.penChoice.emit('penOne');
          this.router.navigate(['/pen-one']);
          break;
        case 'penTwo':
          this.penChoice.emit('penTwo');
          this.router.navigate(['/pen-two']);
          break;
        case 'penThree':
          this.penChoice.emit('penThree');
          this.router.navigate(['/pen-three']);
          break;
        default:
          console.error('Invalid pen selection');
          this.router.navigate(['/']);
      }
    } else if (this.newGameToggle && !this.loadGameToggle && gameState) {
      console.log('There is already a pet in this pen');
    } else if (this.loadGameToggle && !this.newGameToggle && gameState) {
      this.gameType.emit('loadGame');
      // TO DO: add logic to populate pen if game already exists
      // loads already saved game
      console.log(`Loading game with ${penChoice}`);
      switch (penChoice) {
        case 'penOne':
          this.penChoice.emit('penOne');
          this.router.navigate(['/pen-one']);
          break;
        case 'penTwo':
          this.penChoice.emit('penTwo');
          this.router.navigate(['/pen-two']);
          break;
        case 'penThree':
          this.penChoice.emit('penThree');
          this.router.navigate(['/pen-three']);
          break;
        default:
          console.error('Invalid pen selection');
          this.router.navigate(['/']);
      }
    } else if (this.loadGameToggle && !this.newGameToggle && !gameState) {
      console.log('There is no pet in this pen');
    }
  }
}
