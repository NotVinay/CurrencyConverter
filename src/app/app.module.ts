import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ConverterComponent } from "./components/converter/converter.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { GraphComponent } from "./components/graph/graph.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    GraphComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NoopAnimationsModule, MatInputModule, MatSelectModule],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule {}
