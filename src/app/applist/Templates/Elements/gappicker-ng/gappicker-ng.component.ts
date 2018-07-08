import { Component, OnInit, Input } from '@angular/core';

import {ServiceCl} from 'src/app/applist/Services/services.component'
import {NumberPickerControlNew} from 'src/app/applist/Models/POCOnew.component'

@Component({
  selector: 'app-gappicker-ng',
  templateUrl: './gappicker-ng.component.html',
  styleUrls: ['./gappicker-ng.component.css']
})
export class GappickerNgComponent implements OnInit {

  @Input() itemValue_:NumberPickerControlNew;
  min?:number;
  max?:number;

  cstmSpin:boolean;

  first:string;
  second:string;
  constructor() {

    this.cstmSpin=true;

    ServiceCl.log(['Constructor : ' + this.constructor.name,this.itemValue_])
  }

  ngOnInit() {
    this.min=this.itemValue_.minN;
    this.max=this.itemValue_.maxN;
    if(this.itemValue_.cssClass=="fxvt"){
      this.first="shevron up";
      this.second="shevron down";
    }
    if(this.itemValue_.cssClass=="fxhr"){
      this.first="shevron left";
      this.second="shevron right";
    }

    ServiceCl.log(['Inited : ' + this.constructor.name,this.itemValue_,this.first])
  }
  shevronFirst(){
    // return this.sanitizer.bypassSecurityTrustStyle(this.first);
    return this.first;
  }
  shevronSecind(){
    // return this.sanitizer.bypassSecurityTrustStyle(this.second);
    return this.second;
  }
  increase(){
    this.itemValue_.checkInput(this.itemValue_.DisplayValue+1);
    ServiceCl.log(['increased to : ',this.itemValue_.HtmlSubmittedValue])
  }
  decrease(){
    this.itemValue_.checkInput(this.itemValue_.DisplayValue-1);
    ServiceCl.log(['decreased to : ',this.itemValue_.HtmlSubmittedValue])
  }
  input_(){
    this.itemValue_.checkInput(this.itemValue_.DisplayValue);
    ServiceCl.log(['inputed to : ',this.itemValue_.HtmlSubmittedValue])
  }
}
