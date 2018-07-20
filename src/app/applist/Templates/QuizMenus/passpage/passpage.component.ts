import { Component, OnInit } from '@angular/core';
import {ServiceCl} from 'src/app/applist/Services/services.component'
import {ModelContainerNew,FactoryNew} from 'src/app/applist/Models/initsNew.component';

@Component({
  selector: 'app-passpage',
  templateUrl: './passpage.component.html',
  styleUrls: ['./passpage.component.css']
})
export class PasspageComponent implements OnInit {

  cssback:string;
  style_:any;
  opacity_:number;

  constructor() {
    this.cssback=null;
    ServiceCl.log(["Constructor: " + this.constructor.name]);
  }

  ngOnInit() {
    this.style_={'background':'','position':'absolute','height':'100%','width':'100%', 'opacity': '0.5'};
    this.style_.background=FactoryNew.GradientGen() + ',' +FactoryNew.GradientGen();
    ServiceCl.log(["Initialize: " + this.constructor.name,this.style_]);
  }
  changed(e:any){
    this.opacity_=e.srcElement.value/100;
    this.style_.opacity=this.opacity_;
    ServiceCl.log(["changed",e,this.opacity_])
  }
}
