import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonContent, 
  IonSegment, IonSegmentButton, IonLabel, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  openOutline, briefcaseOutline, schoolOutline, 
  codeSlashOutline, timeOutline, checkmarkCircleOutline, folderOutline, globeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonContent, 
    IonSegment, IonSegmentButton, IonLabel, IonIcon
  ]
})
export class Tab2Page {
  segmento: 'experiencia' | 'proyectos' = 'experiencia';

  experiencias = [
    {
      tipo: 'academico',
      badge: 'Académico',
      cargo: 'Tecnología en Desarrollo de Software',
      institucion: 'ESFOT - Escuela Politécnica Nacional (EPN)',
      periodo: '2022 — 2026',
      icono: 'school-outline',
      descripcion: 'Formación rigurosa en construcción de sistemas eficientes, metodologías ágiles, modelado de bases de datos relacionales y buenas prácticas.'
    },
     {
      tipo: 'laboral',
      badge: 'Laboral',
      cargo: 'Desarrollador Backend/Frontend (Ecuatecnology)',
      institucion: 'Prácticas Preprofesionales (240h)',
      periodo: '2025',
      icono: 'briefcase-outline',
      descripcion: 'Aplicación de fundamentos de desarrollo en entornos reales, diseño de arquitecturas backend y ejecución de pruebas de carga con Locust.'
    },
    {
      tipo: 'academico',
      badge: 'Académico',
      cargo: 'Bachiller en Ciencias',
      institucion: 'Abdón Calderón - (COMIL 10)',
      periodo: '2011 — 2022',
      icono: 'school-outline',
      descripcion: 'Bachillerato General Unificado en Ciencias, con base sólida en matemáticas, física y razonamiento lógico, que me sirvió como punto de partida para la programación y la resolución de problemas.'
    }
  ];

  proyectos = [
  {
    titulo: 'StepShoes Store',
    categoria: 'E-Commerce / Frontend',
    rol: 'Desarrollador Frontend',
    descripcion: 'Aplicación web interactiva para catálogo y compra de calzado con componentes dinámicos y carrito.',
    tecnologias: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    enlace: 'https://github.com/Eduxard-o/Proyecto_StepShoes_React'
  },
  {
    titulo: 'Performance IA — Predictor de Deserción',
    categoria: 'Inteligencia Artificial / ML',
    rol: 'Desarrollador / Analista de Datos',
    descripcion: 'Modelo predictivo enfocado en identificar y prevenir el riesgo de deserción estudiantil universitaria.',
    tecnologias: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Pandas'],
    enlace: 'https://github.com/MariaGiron-code/Performance_IA'
  },
  {
    titulo: 'Base de Datos Relacional Integrada',
    categoria: 'Base de Datos / Arquitectura',
    rol: 'Diseño y Modelado SQL',
    descripcion: 'Diseño y optimización de base de datos relacional robusta en PostgreSQL para almacenamiento seguro y eficiente.',
    tecnologias: ['PostgreSQL', 'PLpgSQL', 'Modelado Relacional', 'SQL'],
    enlace: 'https://github.com/MariaGiron-code/ProyectoIntegrador_BasesDatos'
  },
  {
    titulo: 'Sistema Web Ecuatechnology',
    categoria: 'Desarrollo Web',
    rol: 'Desarrollador de Software',
    descripcion: 'Plataforma web colaborativa orientada a soluciones y servicios tecnológicos.',
    tecnologias: ['JavaScript', 'Frontend', 'CSS3', 'REST API'],
    enlace: 'https://github.com/Mateo-Sudo-24/Proyecto_Ecuatechnology'
  },
  {
    titulo: 'Análisis de Datos 2025A',
    categoria: 'Data Science / Análisis',
    rol: 'Analista de Datos',
    descripcion: 'Procesamiento, visualización y análisis estadístico de conjuntos de datos académicos y operativos.',
    tecnologias: ['Python', 'Jupyter Notebook', 'Data Analysis', 'Visualización'],
    enlace: 'https://github.com/MariaGiron-code/ProyectAnalisis2025A'
  },
  {
    titulo: 'Proyecto Backend Python',
    categoria: 'Backend / Scripting',
    rol: 'Desarrollador Backend',
    descripcion: 'Solución en Python orientada a procesamiento de datos, lógica de negocio y automatización.',
    tecnologias: ['Python', 'POO', 'Estructuras de Datos'],
    enlace: 'https://github.com/Eduxard-o/Proyecto_EGanchala_OVazques'
  }
];

  constructor() {
    addIcons({ 
      openOutline, briefcaseOutline, schoolOutline, 
      codeSlashOutline, timeOutline, checkmarkCircleOutline, folderOutline, globeOutline 
    });
  }

  cambiarSegmento(event: any) {
    this.segmento = event.detail.value;
  }
}