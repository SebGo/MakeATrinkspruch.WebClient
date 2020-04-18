import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-toast-filter',
    templateUrl: './toast-filter.component.html',
    styleUrls: ['./toast-filter.component.scss'],
})
export class ToastFilterComponent {
    constructor(public dialogRef: MatDialogRef<ToastFilterComponent>) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
