import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'pen-component',
  templateUrl: './pen.component.html',
  styleUrl: './pen.component.css',
})
export class PenComponent {
  // based on pen input from menu component, import different pet information
  @Input() selectedPen: string = '';
  @Output() hasExited = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  // default valuesj
  hunger: number = 5;
  happiness: number = 5;
  cleanliness: number = 5;
  petAge: number = 0;
  petName: string = 'Miffy';
  date: Date = new Date();
  statusUpdate: string = 'welcome';

  feedPet() {
    if (this.hunger > 0) {
      this.hunger--;
      this.statusUpdate = 'You fed your pet';
    } else {
    }
  }

  playWithPet() {
    if (this.happiness < 10) {
      this.happiness++;
      this.statusUpdate = 'You played with your pet';
    } else {
    }
  }

  cleanPet() {
    if (this.cleanliness < 10) {
      this.cleanliness++;
      this.statusUpdate = 'You cleaned your pet';
    } else {
    }
  }

  exitPen() {
    console.log('Exiting pen');
    this.router.navigate(['/']);
  }
}
