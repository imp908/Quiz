import { Component, OnInit, Input } from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Button,ModelContainer} from 'app/app7/Models/inits.component'

import 'assets/popper.min.js'

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})

export class ClickComponent implements OnInit {
  cName:string;
  test: boolean;

  @Input() button_:Button;
  @Input() obj_:any;
  @Input() e_:any;

  constructor(private service:Service_){
    //ServiceCl.toLog=true;
    this.test=service.test;
    //ServiceCl.toLog=true;
    this.cName=this.constructor.name;
    // this.button_=new Button();
    this.obj_=null;
    //ServiceCl.log(['Constructor : ' + this.constructor.name,this.button_,this.obj_])
  }

  ngOnInit() {
    if(this.button_.toolTipText!=null){
      if(this.obj_!=null){
        if(this.obj_.typeName!=null){
          this.button_.toolTipText=this.button_.toolTipText+" "+this.obj_.typeName;
        }
      }
    }else{

    }

    ServiceCl.log(["Inited " + this.constructor.name,this.button_,this.obj_])

  }

  clicked_(o_:any){
    ServiceCl.log(["clicked_: ",o_,this.button_])
    ModelContainer.clickStageDetect(this.button_,o_);
  }

  clickEvent_(e:any){
    ServiceCl.log(["clickEvent_ : ",e])
  }

}
