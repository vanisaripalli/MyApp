import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit, OnChanges {

  @Input() tableData: any;
  @Output() onEditRecord: any = new EventEmitter();
  @Output() onDeleteRecord: any = new EventEmitter();
  articleData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.articleData = this.tableData;
  }

  ngOnChanges(): void {
    this.articleData = this.tableData;
  }

  clickEditRecord(item: any, i: number) {
    const data = {item ,i}
    this.onEditRecord.emit(data);
  }

  clickDeleteRecord(i: number) {
    this.onDeleteRecord.emit(i);
  }
}
