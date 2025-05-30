import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() selectedPen = new EventEmitter<string>();

  // default properties
  isNewGame: boolean = false;
  isLoadGame: boolean = false;

  // pen button states
  penStates: { [key in 'pen1' | 'pen2' | 'pen3']: boolean} =
  {
    pen1:false,
    pen2:false,
    pen3:false,
  };

  onNewGameClick() {
    this.isNewGame = !this.isNewGame;
    console.log('New Game Clicked');
    // logic to start a new game can be added here
    // need to launch new pet creator
  }

  onLoadGameClick() {
    this.isLoadGame = !this.isLoadGame;
    console.log('Load Game Clicked');
    // logic to load the game can be added here
  }

  onPenOptionClick(pen: 'pen1' | 'pen2' | 'pen3') {
    // logic to select specific pen
    if (this.isLoadGame) {
      // logic to load the game with the selected pen
      console.log(`Loading game with ${pen}`);
      this.selectedPen.emit(pen);
    }
    
    if (this.isNewGame) {
      this.penStates[pen] = !this.penStates[pen]; // toggle logic
      
      if (this.penStates[pen])
        this.selectedPen.emit(pen);
      else
        this.selectedPen.emit('');
    }

  }

  // onExitPenClick() {
  //   this.selectedPen.emit('');
  // }
}
