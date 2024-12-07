import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardTwoComponent } from '../card-two/card-two.component';
import { HttpClient } from '@angular/common/http';
import { EducationService } from 'src/app/services/education.service';
import { error } from 'console';

interface EducationContentItem {
  id: number;
  title: string;
  content_type: 'articulo' | 'video' | 'podcast';
  level: string;
  content_url: string;
  image_url: string;
  created_at: string;
}

@Component({
  selector: 'app-education-content',
  standalone: true,
  imports: [MaterialModule, CardTwoComponent, CommonModule, RouterModule],
  templateUrl: './education-content.component.html',
  styleUrl: './education-content.component.css',
})
export class EducationContentComponent implements OnInit {
  reports: EducationContentItem[] = [];
  videos: EducationContentItem[] = [];
  podcast: EducationContentItem[] = [];

  fictReports: EducationContentItem[] = [
    {
      id: 1,
      title: '¿Qué son y cómo podés invertir en Bonos?',
      content_type: 'articulo',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/educacion-01.png',
      created_at: '',
    },
    {
      id: 2,
      title: 'Invertir en dólares o en USDT. ¿Qué es mejor?',
      content_type: 'articulo',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/educacion-02.png',
      created_at: '',
    },
    {
      id: 3,
      title: '¿Cuáles son las mejores opciones Crypto para invertir?',
      content_type: 'articulo',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/educacion-03.png',
      created_at: '',
    },
  ];

  fictVideos: EducationContentItem[] = [
    {
      id: 4,
      title: 'Curso de Educación Financiera',
      content_type: 'video',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/videos-01.png',
      created_at: '',
    },
    {
      id: 5,
      title: 'Cómo gestionar y administrar tu dinero de forma Inteligente',
      content_type: 'video',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/videos-02.png',
      created_at: '',
    },
    {
      id: 6,
      title: 'Aprende a Invertir desde 0 y de Forma 100% SEGURA',
      content_type: 'video',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/videos-03.png',
      created_at: '',
    },
  ];

  fictPodcasts: EducationContentItem[] = [
    {
      id: 7,
      title: 'Finazas en pareja.',
      content_type: 'podcast',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/podcast-01.png',
      created_at: '',
    },
    {
      id: 8,
      title: 'La educación financiera de los hijos.',
      content_type: 'podcast',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/podcast-01.png',
      created_at: '',
    },
    {
      id: 9,
      title: 'Planificando la jubilación.',
      content_type: 'podcast',
      level: 'básico',
      content_url: '#',
      image_url: 'assets/images/podcast-01.png',
      created_at: '',
    },
  ];

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.fetchEducationContent();
  }

  fetchEducationContent() {
    this.educationService.getEducationContent().subscribe(
      (data: EducationContentItem[]) => {
        this.reports =
          data.filter((item) => item.content_type === 'articulo').slice(0, 3) ||
          this.fictReports;
        this.reports =
          data.filter((item) => item.content_type === 'video').slice(0, 3) ||
          this.fictVideos;
        this.reports =
          data.filter((item) => item.content_type === 'podcast').slice(0, 3) ||
          this.fictPodcasts;
      },
      (error) => {
        console.error('Error fetching education content:', error);
        this.reports = this.fictReports;
        this.videos = this.fictVideos;
        this.podcast = this.fictPodcasts;
      }
    );
  }
}
