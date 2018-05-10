import { Component, OnInit ,Input} from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Test,ItemParameter,ModelContainer} from 'app/app7/Models/inits.component'


@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  cName:string;
  test: boolean;

  @Input() nodesPassed_:ItemParameter;

  constructor(private service:Service_) {
    ServiceCl.log(["Constructor: " + this.constructor.name,this.nodesPassed_]);
    this.test=service.test;
  
  }

  ngOnInit() {
    ServiceCl.log(["Inited: " + this.constructor.name,this.nodesPassed_]);
  }


}
