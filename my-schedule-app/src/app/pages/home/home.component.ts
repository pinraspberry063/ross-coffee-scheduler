import { Component } from '@angular/core';
import { ActionCardComponent } from '../../components/action-card/action-card.component';

@Component({
  selector: 'app-home',
  imports: [ActionCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
