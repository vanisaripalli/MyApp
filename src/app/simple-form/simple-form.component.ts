import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface personDetails {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: number;
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  country: string | undefined;
  phoneNumber!: number | null;
  isEditing: boolean;
  editableIndex!: number;

  tableData: Array<personDetails> = [];

  constructor() {
    this.isEditing=false;
   }

  ngOnInit(): void {
  }

  getDetails(data: personDetails) {
    console.log(this.country);
    if(this.isEditing) {
      this.tableData[this.editableIndex].firstName=data.firstName;
      this.tableData[this.editableIndex].lastName=data.lastName;
      this.tableData[this.editableIndex].country=data.country;
      this.tableData[this.editableIndex].phoneNumber=data.phoneNumber;
    }else {
    this.tableData.push({
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      phoneNumber: data.phoneNumber,
    });
  }

    this.cancelHandler();
  }

  cancelHandler() {
    this.firstName='';
    this.lastName='';
    this.country='';
    this.phoneNumber=null;
  }

  onEdit(item: personDetails, i: number) {
    this.isEditing=true;
    this.editableIndex=i;
    this.firstName=item.firstName;
    this.lastName=item.lastName;
    this.country=item.country;
    this.phoneNumber=item.phoneNumber;
  }

  onDelete(i: number) {
    this.tableData.splice(i, 1);
  }

}
