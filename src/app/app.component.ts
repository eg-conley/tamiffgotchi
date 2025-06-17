import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { RouterOutlet } from '@angular/router'

import { CommonModule } from '@angular/common'
import { MenuComponent } from './components/menu/menu.component'
import { PenComponent } from './components/pen/pen.component'

@Component({
  selector: 'app-component',
  imports: [RouterOutlet, CommonModule, MenuComponent, PenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'tamiffgotchi'

  menu = MenuComponent
  pen = PenComponent

  constructor(private router: Router) {}

  // default variables
  isSelected: boolean = false

  onPenSelected(pen: string) {
    console.log('Selected Pen:', pen)
    this.isSelected = true
    switch (pen) {
      case 'penOne':
        this.router.navigate(['/pen-one'])
        break
      case 'penTwo':
        this.router.navigate(['/pen-two'])
        break
      case 'penThree':
        this.router.navigate(['/pen-three'])
        break
      default:
        console.error('Invalid pen selection')
    }
  }

  onExitClick() {
    this.isSelected = false
    this.router.navigate(['/'])
  }
}
