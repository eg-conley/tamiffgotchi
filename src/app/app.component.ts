import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PenComponent } from './components/pen/pen.component';

@Component({
  selector: 'app-component',
  imports: [
    CommonModule,
    MenuComponent,
    PenComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'tamiffgotchi';

  menu = MenuComponent;
  pen = PenComponent;

  // default variables
  selectedPen: string = '';

  onPenSelected(pen: string) {
    this.selectedPen = pen;
    console.log('Selected Pen:', pen);
  }

  onExitPenClick(hasExited : true) {
    // logic to exit pen
    this.selectedPen = '';
  }

}
