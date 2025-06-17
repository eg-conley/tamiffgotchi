import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { PenComponent } from './components/pen/pen.component'

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'pen-one', component: PenComponent, data: { pen: 'penOne' } },
  { path: 'pen-two', component: PenComponent, data: { pen: 'penTwo' } },
  { path: 'pen-three', component: PenComponent, data: { pen: 'penThree' } },
]
