import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  mailOutline, callOutline, locationOutline, logoGithub, mail,
  downloadOutline, openOutline, briefcaseOutline, schoolOutline,
  checkmarkCircleOutline, codeSlashOutline, logoWhatsapp
} from 'ionicons/icons';
import { 
  IonHeader, IonToolbar, IonContent, IonIcon
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonContent, IonIcon
  ]
})
export class Tab1Page {

  stats = [
    { valor: '02+', etiqueta: 'Años de', etiqueta2: 'formación' },
    { valor: '04+', etiqueta: 'Proyectos', etiqueta2: 'desarrollados' },
    { valor: '240h', etiqueta: 'Prácticas', etiqueta2: 'profesionales' }
  ];

  recorrido = [
    {
      icono: 'briefcase-outline',
      color: 'coral',
      cargo: 'Desarrollador Backend',
      lugar: 'Prácticas Preprofesionales (240h)',
      periodo: '2025'
    },
    {
      icono: 'school-outline',
      color: 'mint',
      cargo: 'Tecnología en Desarrollo de Software',
      lugar: 'ESFOT — Escuela Politécnica Nacional',
      periodo: '2022 — 2026'
    }
  ];

  contactos = [
    { icono: 'mail-outline', valor: 'eduardoganchala29@gmail.com', href: 'mailto:eduardoganchala29@gmail.com', tipo: 'Email' },
    { icono: 'call-outline', valor: '+593 987934085', href: 'tel:+593987934085', tipo: 'Teléfono' },
    { icono: 'location-outline', valor: 'Quito, Ecuador', href: null, tipo: 'Ubicación' },
    { icono: 'logo-github', valor: 'github.com/Eduxard-o', href: 'https://github.com/Eduxard-o', tipo: 'GitHub' }
  ];

  constructor() {
    addIcons({ 
      mailOutline, callOutline, locationOutline, logoGithub, mail,
      downloadOutline, openOutline, briefcaseOutline, schoolOutline,
      checkmarkCircleOutline, codeSlashOutline, logoWhatsapp
    });
  }
}