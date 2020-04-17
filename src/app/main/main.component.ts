import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/services/toast.service';
import { Toast } from 'src/models/toast.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public toast: Toast;
    constructor(private toastService: ToastService) {
        this.toast = new Toast('', '', false, []);
    }

    ngOnInit(): void {
        this.getNewToast();
    }

    public getNewToast() {
        this.toastService.getRandomTrinkspruch().subscribe(
            (toastJson) => {
                console.log(toastJson);
                this.toast = new Toast(
                    toastJson.id,
                    toastJson.toastText,
                    toastJson.reviewed,
                    toastJson.tags
                );
            },
            (err) => {
                console.log('error: ', err);
            }
        );
    }
}
