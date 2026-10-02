import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { GameData, DataService } from '../../services/data.service';

@Component({
  imports: [DatePipe],
  selector: 'pen-component',
  templateUrl: './pen.component.html',
  styleUrl: './pen.component.css',
})
export class PenComponent {
  // based on pen input from menu component, import different pet information
  @Input() inputPetName: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  petName: string = this.inputPetName;
  petAge: number = 0;
  hunger: number = 5;
  happiness: number = 0;
  cleanliness: number = 0;
  date: Date = new Date();
  statusUpdate: string = 'welcome';

  ngOnInit() {
    const savedData = this.dataService.loadGameData(this.petName);
    if (savedData) {
      this.petAge = savedData.petAge;
      this.hunger = savedData.hunger;
      this.happiness = savedData.happiness;
      this.cleanliness = savedData.cleanliness;
    }
  }

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

  saveGame() {
    const gameData: GameData = {
      petName: this.petName,
      petAge: this.petAge,
      hunger: this.hunger,
      happiness: this.happiness,
      cleanliness: this.cleanliness,
    };
    this.dataService.saveGameData(this.petName, gameData);
    this.statusUpdate = 'Game saved';
  }

  exitPen() {
    console.log('Exiting pen');
    this.router.navigate(['/']);
  }
}
