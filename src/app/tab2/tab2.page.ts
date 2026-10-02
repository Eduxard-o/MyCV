import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, 
  IonLabel, IonAccordionGroup, IonAccordion, IonItem, IonBadge, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { openOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonItem, IonBadge, IonIcon
  ]
})
export class Tab2Page {
  educacion = [
    {
      titulo: 'Tecnología en Desarrollo de Software',
      institucion: 'ESFOT - Escuela Politécnica Nacional (EPN)',
      anio: '2026',
      descripcion: 'Formación integral en desarrollo de software, culminación e inducción de grado aprobada.'
    }
  ];

  proyectos = [
    {
      rol: 'Desarrollador Backend',
      proyecto: 'Sistema Web - Academia "Navaja Dorada"',
      anio: '2026',
      descripcion: 'Desarrollo del componente backend para gestión y venta de cursos.'
    },
    {
      rol: 'Prácticas Laborales (240h)',
      proyecto: 'Prácticas Preprofesionales',
      anio: '2026',
      descripcion: 'Aplicación de fundamentos en entornos reales y pruebas con Locust.'
    }
  ];

  constructor() {
    addIcons({ openOutline });
  }
}