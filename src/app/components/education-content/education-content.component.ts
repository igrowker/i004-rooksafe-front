import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardTwoComponent } from '../card-two/card-two.component';
@Component({
  selector: 'app-education-content',
  standalone: true,
  imports: [MaterialModule, CardTwoComponent, CommonModule, RouterModule],
  templateUrl: './education-content.component.html',
  styleUrl: './education-content.component.css'
})
export class EducationContentComponent {
  reports = [
    {
      title: '¿Qué son y cómo podés invertir en Bonos?',
      image: 'assets/images/educacion-01.png',
    },
    {
      title: 'Invertir en dólares o en USDT. ¿Qué es mejor?',
      image: 'assets/images/educacion-02.png',
    },
    {
      title: '¿Cuáles son las mejores opciones Crypto para invertir?',
      image: 'assets/images/educacion-03.png',
    },
  ];

  videos = [
    {
      title: 'Curso de Educación Financiera',
      image: 'assets/images/videos-01.png',
    },
    {
      title: 'Cómo gestionar y administrar tu dinero de forma Inteligente',
      image: 'assets/images/videos-02.png',
    },
    {
      title: 'Aprende a Invertir desde 0 y de Forma 100% SEGURA',
      image: 'assets/images/videos-03.png',
    },
  ];

  podcast = [
    {
      title: 'Finazas en pareja.',
      image: 'assets/images/podcast-01.png',
    },
    {
      title: 'La educación financiera de los hijos.',
      image: 'assets/images/podcast-01.png',
    },
    {
      title: 'Planificando la jubilación.',
      image: 'assets/images/podcast-01.png',
    },
  ];
}

