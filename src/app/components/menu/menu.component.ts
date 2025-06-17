import { Component, Output, EventEmitter } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Output() penChoice = new EventEmitter<string>()

  // default properties
  newGameToggle: boolean = false
  loadGameToggle: boolean = false
  penStateToggle: { [key in 'penOne' | 'penTwo' | 'penThree']: boolean } = {
    penOne: false,
    penTwo: false,
    penThree: false,
  }

  onNewGameClick() {
    this.newGameToggle = !this.newGameToggle
    // TO DO: logic to start a new game can be added here
  }

  onLoadGameClick() {
    this.loadGameToggle = !this.loadGameToggle
    // TO DO: logic to load the game can be added here
  }

  onPenOptionClick(penChoice: 'penOne' | 'penTwo' | 'penThree') {
    // creates a new game
    if (this.newGameToggle && !this.loadGameToggle) {
      this.penStateToggle[penChoice] = true // set pen state as active

      // if active, emit the pen choice
      if (this.penStateToggle[penChoice]) {
        console.log(`Starting new game with ${penChoice}`)
        this.penChoice.emit(penChoice)
      } else {
        this.penChoice.emit('')
      }
    } else {
      // loads already saved game
      if (this.loadGameToggle && !this.newGameToggle) {
        console.log(`Loading game with ${penChoice}`)
        this.penChoice.emit(penChoice)
      }
    }
  }
}
