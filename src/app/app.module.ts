import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TemplateFormComponent } from './template/template.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { ListDataComponent } from './list-data/list-data.component';
import { UsingAPIComponent } from './using-api/using-api.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TemplateFormComponent,
    ArticleManagementComponent,
    SimpleFormComponent,
    LibraryManagementComponent,
    ListDataComponent,
    UsingAPIComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
