export interface GameState {
  penOne: boolean;
  penTwo: boolean;
  penThree: boolean;
}
type PenKey = 'penOne' | 'penTwo' | 'penThree';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {
  private key = 'super-secret-key';

  saveGameState(penChoice: PenKey, state: boolean) {
    const savedStates = this.loadAllStates();
    savedStates[penChoice] = state;
    localStorage.setItem(this.key, JSON.stringify(savedStates));
  }

  loadGameState(penChoice: PenKey): boolean {
    const savedStates = this.loadAllStates();
    return savedStates[penChoice];
  }

  loadAllStates(): GameState {
    const savedStates = localStorage.getItem(this.key);
    return savedStates
      ? JSON.parse(savedStates)
      : { penOne: false, penTwo: false, penThree: false };
  }
}
