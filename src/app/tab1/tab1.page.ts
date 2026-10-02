import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, locationOutline, logoGithub, mail } from 'ionicons/icons';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonButton 
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonButton
  ]
})
export class Tab1Page {
  contactos = [
    { icono: 'mail-outline', valor: 'eduardoganchala29@gmail.com' },
    { icono: 'call-outline', valor: '+593 987934085' },
    { icono: 'location-outline', valor: 'Quito, Ecuador' },
    { icono: 'logo-github', valor: 'https://github.com/Eduxard-o' }
  ];

  constructor() {
    addIcons({ mailOutline, callOutline, locationOutline, logoGithub, mail });
  }
}