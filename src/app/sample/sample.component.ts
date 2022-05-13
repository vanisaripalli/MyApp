import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  name: string | undefined;
  city: string;
  arr = [{

  }]
  
  constructor() { 
  //  this.name='vani';
    this.city='BVRM';
    console.log(this.name);
    
  }

  ngOnInit(): void {
    this.name='nani';
    let data = 'bjaksh';
  }

  getDetails() {
    console.log(this.name);
  }

}
