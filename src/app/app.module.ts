import {
    BrowserModule,
    HAMMER_GESTURE_CONFIG,
    HammerGestureConfig,
    HammerModule,
} from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImprintComponent } from './imprint/imprint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastFilterComponent } from './toast-filter/toast-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        ImprintComponent,
        ToastFilterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        FormsModule,
        HammerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
