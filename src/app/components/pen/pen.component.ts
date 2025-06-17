import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router, RouterLink } from '@angular/router'

@Component({
  imports: [RouterLink],
  selector: 'pen-component',
  templateUrl: './pen.component.html',
  styleUrl: './pen.component.css',
})
export class PenComponent {
  // based on pen input from menu component, import different pet information
  @Input() selectedPen: string = ''
  @Output() hasExited = new EventEmitter<boolean>()

  constructor(private router: Router) {}

  hunger = 5
  happiness = 5
  cleanliness = 5
  age = 0

  feedPet() {
    if (this.hunger > 0) {
      this.hunger--
    } else {
    }
  }

  playWithPet() {
    if (this.happiness < 10) {
      this.happiness++
    } else {
    }
  }

  cleanPet() {
    if (this.cleanliness < 10) {
      this.cleanliness++
    } else {
    }
  }

  onExitClick() {
    console.log('Event emitted: exiting pen')
    this.hasExited.emit(true)
    this.router.navigate(['/'])
  }
}
