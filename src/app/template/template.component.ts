import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface EmployeeData {
  name: string,
  age: number,
  country: string,
  number: number
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateFormComponent implements OnInit {

  name: string;
  age : number | null;
  country: string;
  number: number | null;
  simpleData: Array<EmployeeData> = [];
  isEditing: boolean;
  editableIndex !: number;

  constructor() { 
    this.name='vani';
    this.age=25;
    this.country='india';
    this.number=1234567890;
    this.isEditing=false;
    
  }

  ngOnInit(): void {
  }

  getDetails(data: EmployeeData) {
    console.log(data);
    if(this.isEditing) {
      
      this.simpleData[this.editableIndex].name = data.name;
      this.simpleData[this.editableIndex].age = data.age;
      this.simpleData[this.editableIndex].country = data.country;
      this.simpleData[this.editableIndex].number = data.number;
    } else {
    this.simpleData.push({
      name: data.name,
      age: data.age,
      country: data.country,
      number: data.number
    });
  }
    this.getCancelHandler();
  }

  onEditData(item: EmployeeData, i: number) {
    this.isEditing = true;
    this.editableIndex=i;
    this.name=item.name;
    this.age=item.age;
    this.country=item.country;
    this.number=item.number;

  }

  onDeleteData(i: number) {
    this.simpleData.splice(i, 1);
  }

  getCancelHandler() {
    this.name='';
    this.country='';
    this.age=null;
    this.number=null;

  }

}
