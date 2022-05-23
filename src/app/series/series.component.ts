import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

interface Series {
  seriesName: string;
  seriesType: string;
  seasons: number;
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  seriesForm: any;
  seriesData: Array<Series> = [];
  isEditing: boolean;
  editableIndex!: number;

  constructor(private fb: FormBuilder) {
    this.seriesForm = this.fb.group({
      seriesName: [''],
      seriesType: [''],
      seasons: [''],
    });
    this.isEditing = false;
    
   }

  ngOnInit(): void {
  }

  getDetails() {
    console.log(this.seriesForm.value);
    if(this.isEditing) {
      this.seriesData[this.editableIndex].seriesName = this.seriesForm.value.seriesName;
      this.seriesData[this.editableIndex].seriesType = this.seriesForm.value.seriesType;
      this.seriesData[this.editableIndex].seasons = this.seriesForm.value.seasons;
    }else {
    this.seriesData.push({
      seriesName: this.seriesForm.value.seriesName,
      seriesType: this.seriesForm.value.seriesType,
      seasons: this.seriesForm.value.seasons,
    });
  }
    this.cancelHandler();
  }

  cancelHandler() {
    this.seriesForm.reset();
    this.isEditing = false;
    }

    onEdit(item: any, i: number) {
      console.log(item, i);
      this.isEditing = true;
      this.editableIndex = i;
      this.seriesForm.patchValue({
        seriesName: item.seriesName,
        seriesType: item.seriesType,
        seasons: item.seasons, 
      })
      
    }

    onDelete(i: number) {
      this.seriesData.splice(i, 1);
    }

}
