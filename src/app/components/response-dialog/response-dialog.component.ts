import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-response-dialog',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.css',
})
export class ResponseDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('respuesta desde el dialog', this.data);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
