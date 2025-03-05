import { Component, signal, input } from '@angular/core';

@Component({
  selector: 'app-action-card',
  imports: [],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.css'
})
export class ActionCardComponent {
  title = input('Title');
}
