import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from '../config.service';

interface api {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-using-api',
  templateUrl: './using-api.component.html',
  styleUrls: ['./using-api.component.css']
})
export class UsingAPIComponent implements OnInit {

  apiForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
    userId: new FormControl(),
  });
  apiData: Array<api> = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {

  }

  getData() {
    console.log(this.apiForm.value);
    const obj = {
      id: this.apiForm.value.id,
      title: this.apiForm.value.title,
      body: this.apiForm.value.body,
      userId: this.apiForm.value.userId,
    }

    //To get data from api
    // this.configService.getPostsList().subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     // this.apiData = [...res];
    //     this.apiData = res;
    //     console.log(this.apiData);
        
    //   }
    // ),
    // (err: any) => {
    //   console.log(err);
    // }

    this.configService.getResult(obj).subscribe(
      (res: any) => {
        this.configService.getPostsList().subscribe(
          (res: any) => {
            console.log(res);
            this.apiData = res;
          }, (err: any) => {
            console.log(err);
          }
        );
      },(err: any) => {
        console.log(err);
      }
    );

    this.cancelHandler();
  }

  cancelHandler() {
    this.apiForm.reset();
  }

}
