import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    SidenavComponent,
    ToolbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
