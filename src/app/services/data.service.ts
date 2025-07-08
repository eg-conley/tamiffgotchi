export interface GameData {
  petName: string;
  petAge: number;
  hunger: number;
  happiness: number;
  cleanliness: number;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private key = 'this-will-be-more-secure';

  saveGameData(petName: string, gameData: GameData) {
    const savedData = this.loadAllData();
    savedData[petName] = gameData;
    localStorage.setItem(this.key, JSON.stringify(savedData));
  }

  loadGameData(petName: string): GameData | null {
    const savedData = this.loadAllData();
    return savedData[petName] || null;
  }

  loadAllData(): { [key: string]: GameData } {
    const savedData = localStorage.getItem(this.key);
    return savedData ? JSON.parse(savedData) : {};
  }
}
