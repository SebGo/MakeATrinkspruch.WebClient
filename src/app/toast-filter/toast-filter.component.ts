import { TagService } from './../../services/tag.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/models/tag.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { MatSelectionList } from '@angular/material/list';

@Component({
    selector: 'app-toast-filter',
    templateUrl: './toast-filter.component.html',
    styleUrls: ['./toast-filter.component.scss'],
})
export class ToastFilterComponent {
    public tagsData$: Observable<Tag[]>;

    constructor(
        public dialogRef: MatDialogRef<ToastFilterComponent>,
        public tagService: TagService,
        @Inject(MAT_DIALOG_DATA) public selectedOptions: string[]
    ) {
        this.tagsData$ = this.tagService.getAllTags();
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    submit() {
        this.dialogRef.close({ selectedTagIds: this.selectedOptions });
    }
}
