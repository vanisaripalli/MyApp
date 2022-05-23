import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  constructor(private router: Router) {}
  
  getArticleForm() {
    this.router.navigate(['article']);
  }
  getTemplateForm() {
    this.router.navigate(['template']);
  }
  getSampleForm() {
    this.router.navigate(['sample']);
  }

}


