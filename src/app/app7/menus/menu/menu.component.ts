import { Component, OnInit } from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Test,NodeCollection,ModelContainer} from 'app/app7/Models/inits.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  cName:string;
  test: boolean;

  nodesPassed_:NodeCollection;

  constructor(private service:Service_){
    ServiceCl.log("Constructor: " + this.constructor.name);
    //service.test=false;
    this.test=service.test;
    this.cName=this.constructor.name;
  }
  ngOnInit(){
    ServiceCl.log("Inited: " +this.constructor.name);
  }
}
