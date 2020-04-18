import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/make-a-trinkspruch', pathMatch: 'full' },
    { path: 'make-a-trinkspruch', component: MainComponent },
    { path: 'imprint', component: ImprintComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
