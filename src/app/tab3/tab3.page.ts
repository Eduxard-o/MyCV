import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  codeSlashOutline, serverOutline, layersOutline, cubeOutline,
  mailOutline, logoWhatsapp, logoGithub, callOutline, openOutline,
  checkmarkCircleOutline, chevronForwardOutline, terminalOutline,
  hardwareChipOutline, sparklesOutline
} from 'ionicons/icons';
import { 
  IonHeader, IonToolbar, IonContent, IonIcon
} from '@ionic/angular';

interface Skill {
  nombre: string;
  nivel: number; // 0 - 100
  etiquetaNivel?: string;
  anio: string;
  origen: string;
  color: 'coral' | 'mint' | 'charcoal';
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonContent, IonIcon
  ]
})
export class Tab3Page {

  backendSkills: Skill[] = [
    {
      nombre: 'Java / Spring Boot',
      nivel: 85,
      etiquetaNivel: 'Avanzado',
      anio: '2024',
      origen: 'EPN & Prácticas',
      color: 'coral'
    },
    {
      nombre: 'Python',
      nivel: 75,
      etiquetaNivel: 'Intermedio',
      anio: '2024',
      origen: 'EPN',
      color: 'mint'
    },
    {
      nombre: 'PostgreSQL / SQL',
      nivel: 80,
      etiquetaNivel: 'Avanzado',
      anio: '2023',
      origen: 'EPN',
      color: 'charcoal'
    }
  ];

  frontendSkills: Skill[] = [
    {
      nombre: 'React',
      nivel: 85,
      etiquetaNivel: 'Avanzado',
      anio: '2024',
      origen: 'EPN',
      color: 'coral'
    }, 
    {
      nombre: 'Angular',
      nivel: 55,
      etiquetaNivel: 'Intermedio',
      anio: '2026',
      origen: 'Autodidacta',
      color: 'coral'
    },
    {
      nombre: 'Ionic Framework',
      nivel: 55,
      etiquetaNivel: 'Intermedio',
      anio: '2026',
      origen: 'EPN',
      color: 'mint'
    },
    {
      nombre: 'TypeScript / JavaScript',
      nivel: 80,
      etiquetaNivel: 'Avanzado',
      anio: '2024',
      origen: 'EPN & Web',
      color: 'charcoal'
    }
  ];

  herramientas: string[] = [
    'Git & GitHub',
    'REST APIs',
    'Locust (Load Testing)',
    'Postman',
    'HTML5 / SCSS',
    'Scrum / Agile',
    'Linux Básico',
    'CI/CD Básico',
    'Scrum'
  ];

  contactos = [
    {
      icono: 'mail-outline',
      titulo: 'Correo Electrónico',
      valor: 'eduardoganchala29@gmail.com',
      enlace: 'mailto:eduardoganchala29@gmail.com',
      color: 'coral'
    },
    {
      icono: 'logo-whatsapp',
      titulo: 'WhatsApp',
      valor: '+593 987934085',
      enlace: 'https://wa.me/593987934085',
      color: 'mint'
    },
    {
      icono: 'logo-github',
      titulo: 'GitHub',
      valor: 'github.com/Eduxard-o',
      enlace: 'https://github.com/Eduxard-o',
      color: 'charcoal'
    }
  ];

  constructor() {
    addIcons({
      codeSlashOutline, serverOutline, layersOutline, cubeOutline,
      mailOutline, logoWhatsapp, logoGithub, callOutline, openOutline,
      checkmarkCircleOutline, chevronForwardOutline, terminalOutline,
      hardwareChipOutline, sparklesOutline
    });
  }
}
