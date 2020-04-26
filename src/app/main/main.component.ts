import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from 'src/services/toast.service';
import { Toast } from 'src/models/toast.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastFilterComponent } from '../toast-filter/toast-filter.component';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
    public toast$: Observable<Toast>;
    public tagFilterIds: Array<string>;
    public subscriptions: Array<Subscription>;

    constructor(
        public router: Router,
        private toastService: ToastService,
        private dialog: MatDialog
    ) {
        this.subscriptions = new Array<Subscription>();
        this.tagFilterIds = new Array<string>();
    }
    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    ngOnInit(): void {
        this.getNewToast();
    }

    openFilterDialog() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.data = this.tagFilterIds;

        const dialogRef = this.dialog.open(ToastFilterComponent, dialogConfig);

        this.subscriptions.push(
            dialogRef.afterClosed().subscribe((result) => {
                if (result !== undefined) {
                    this.tagFilterIds = result.selectedTagIds;
                    this.getNewToast();
                }
            })
        );
    }

    public getNewToast() {
        this.toast$ = this.toastService.getRandomTrinkspruch(this.tagFilterIds);
    }
}
