import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {}
