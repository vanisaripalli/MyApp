import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { SampleComponent } from './sample/sample.component';
import { TemplateFormComponent } from './template/template.component';

const routes: Routes = [
  {path: 'article', component: ArticleManagementComponent },
  {path: 'template', component: TemplateFormComponent},
  {path: 'sample', component: SampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
