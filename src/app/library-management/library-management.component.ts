import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface library {
  bookName: string;
    author: string;
    price: number;
    copies: number;
}

@Component({
  selector: 'app-library-management',
  templateUrl: './library-management.component.html',
  styleUrls: ['./library-management.component.css']
})
export class LibraryManagementComponent implements OnInit {

  libraryForm = new FormGroup({
    bookName: new FormControl(),
    author: new FormControl(),
    price: new FormControl(),
    copies: new FormControl(),
  });

  libraryData: Array<library>=[];

  constructor() { }

  ngOnInit(): void {
  }

  getDetails() {
    console.log(this.libraryForm.value);
    this.libraryData.push({
      bookName: this.libraryForm.value.bookName,
      author: this.libraryForm.value.author,
      price: this.libraryForm.value.price,
      copies: this.libraryForm.value.copies,
    });
    this.cancelHandler();
  }

  cancelHandler() {
    this.libraryForm.reset();
  }

}
