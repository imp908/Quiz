import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class DatepickerPopupComponent implements OnInit {

  model:NgbDateStruct;

  constructor() { }

  ngOnInit() {
  }

  selectToday(){
    this.model={year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
  }
}
