import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonBadge 
} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonBadge
  ],
})
export class Tab3Page {
  habilidades = [
    { titulo: 'Angular', anio: '2023', lugar: 'Autodidacta' },
    { titulo: 'Ionic', anio: '2024', lugar: 'EPN' },
    { titulo: 'Python', anio: '2024', lugar: 'EPN' },
    { titulo: 'Java', anio: '2024', lugar: 'EPN'}
  ];

  constructor() {}
}
