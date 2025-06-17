import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  setTheme(theme: string) {
    const root = document.documentElement;
    switch (theme) {
      case 'default':
        root.style.setProperty('--primary-color', '#111212');
        root.style.setProperty('--accent-color', '#202221');
        root.style.setProperty('--text-color', '#FFFBD4');
        root.style.setProperty('--hover-pressed-color', '#368F36');
        root.style.setProperty('--disabled-color', '#202221');
        break;
      case 'blue':
        root.style.setProperty('--primary-color', '#00335C');
        root.style.setProperty('--accent-color', '#005599');
        root.style.setProperty('--text-color', '#FFFBD4');
        root.style.setProperty('--hover-pressed-color', '#368F36');
        root.style.setProperty('--disabled-color', '#005599');
        break;
      case 'orange':
        root.style.setProperty('--primary-color', '#BF501B');
        root.style.setProperty('--accent-color', '#F26522');
        root.style.setProperty('--text-color', '#FFFBD4');
        root.style.setProperty('--hover-pressed-color', '#368F36');
        root.style.setProperty('--disabled-color', '#F26522');
        break;
    }
  }
}
