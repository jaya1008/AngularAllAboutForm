import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormArrayCompComponent } from './demoformArray/form-array-comp/form-array-comp.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        FormArrayCompComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }