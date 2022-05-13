import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface article {
  articleId: number;
  articleName: string;
  description: string;
  writtenBy: string;
}

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.css']
})
export class ArticleManagementComponent implements OnInit {

  articleForm = new FormGroup({
    articleId: new FormControl(),
    articleName: new FormControl(),
    description: new FormControl(),
    writtenBy: new FormControl()
  });

  title: string;
  articleData: Array<article> = [];
  isEditing: boolean;
  editableIndex!: number;

  constructor() { 
    this.title = 'article-management Reactive Form';
    this.isEditing=false;
  }

  ngOnInit(): void {
  }

  getArticleData() {
    console.log(this.articleForm.value);
    if(this.isEditing) {  
      this.articleData[this.editableIndex].articleId=this.articleForm.value.articleId;
      this.articleData[this.editableIndex].articleName=this.articleForm.value.articleName;
      this.articleData[this.editableIndex].description=this.articleForm.value.description;
      this.articleData[this.editableIndex].writtenBy=this.articleForm.value.writtenBy;
    } else {
    this.articleData.push({
      articleId: this.articleForm.value.articleId,
      articleName: this.articleForm.value.articleName,
      description: this.articleForm.value.description,
      writtenBy: this.articleForm.value.writtenBy,
    });
  }
    this.cancelHandler();
  }

  cancelHandler() {
    this.articleForm.reset();
    this.isEditing=false;
  }

  editRecord(item: article,i: number) {
    this.isEditing=true;
    this.editableIndex=i;
    this.articleForm.controls['articleId'].setValue(item.articleId);
    this.articleForm.controls['articleName'].setValue(item.articleName);
    this.articleForm.controls['description'].setValue(item.description);
    this.articleForm.controls['writtenBy'].setValue(item.writtenBy);
  }

  deleteRecord(i: number) {
    this.articleData.splice(i, 1);
  }

}
