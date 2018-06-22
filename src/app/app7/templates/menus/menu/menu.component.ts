import { Component, OnInit,Input } from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Test,NodeCollection,ModelContainer} from 'app/app7/Models/inits.component'

import {HttpService} from 'app/app7/Services/http.service'

//declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[HttpService]
})

export class MenuComponent implements OnInit {
  cName:string;
  test:boolean;

  @Input() nodesPassed_:NodeCollection;

  constructor(private service:Service_, private http_:HttpService){

    service.test=false;
    this.test=service.test;
    this.cName=this.constructor.name;

    /*
    $('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '-3d'
    });
    */
    ServiceCl.log(["Constructor: " + this.constructor.name]);
  }
  ngOnInit(){
    ModelContainer.Init();
    this.nodesPassed_=ModelContainer.nodesPassed_;

    ServiceCl.log(["Inited: " + this.constructor.name,this.nodesPassed_]);
  }

  QuizPost(){
    this.http_.addQuizTs();
    ServiceCl.log(["Posted"]);
  }
}
