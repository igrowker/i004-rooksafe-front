import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-response-dialog',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.css',
})
export class ResponseDialogComponent implements OnInit {
  isLoading: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<ResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
