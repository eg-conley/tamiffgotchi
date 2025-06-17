import { Routes } from '@angular/router';
// import { AppComponent } from './app.component'
import { MenuComponent } from './components/menu/menu.component';
import { PenComponent } from './components/pen/pen.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'pen-one', component: PenComponent, data: { pen: 'penOne' } },
  { path: 'pen-two', component: PenComponent, data: { pen: 'penTwo' } },
  { path: 'pen-three', component: PenComponent, data: { pen: 'penThree' } },
];
