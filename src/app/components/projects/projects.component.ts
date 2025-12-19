import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  title: string;
  image?: string;       // imagen principal (opcional)
  icons: string[];      // iconos de tecnologías
  url?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  constructor(private readonly router: Router) { }


  projects: Project[] = [
    {
      title: 'Mi Portafolio',
      image: 'assets/images/portafolio.png',
      icons: ['assets/icons/angular.svg'],
    },
    {
      title: 'Nube de imágenes',
      icons: ['assets/icons/angular.svg', 'assets/icons/spring.svg', 'assets/icons/postgresql.svg']
    },
    {
      title: 'Nube de imágenes',
      image: 'assets/images/plan-project.png',
      icons: ['assets/icons/angular.svg', 'assets/icons/nestjs.svg'],
      url: 'https://plans-front.vercel.app'
    }
  ];


  openProject(url: any) {
    console.log('open project to ' + url);
    if (!url || url === undefined || url === '') return;

    // Abre en una nueva pestaña
    window.open(url, '_blank');
  }

}
