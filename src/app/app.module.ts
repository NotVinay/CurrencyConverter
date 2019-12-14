import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ConverterComponent } from "./components/converter/converter.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { GraphComponent } from "./components/graph/graph.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    GraphComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
