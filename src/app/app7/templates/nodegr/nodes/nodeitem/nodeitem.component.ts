import { Component, OnInit,Input } from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Test,HtmlItem,ModelContainer} from 'app/app7/Models/inits.component'
@Component({
  selector: 'app-nodeitem',
  templateUrl: './nodeitem.component.html',
  styleUrls: ['./nodeitem.component.css']
})
export class NodeitemComponent implements OnInit {

      cName:string;
      test: boolean;

      @Input() htmlItem_:HtmlItem;

  constructor(private service:Service_) {
    //service.test=false;
    this.test=service.test;
    this.cName=this.constructor.name;

    ServiceCl.log(["Constructor: " + this.constructor.name,this.htmlItem_]);
   }

  ngOnInit() {
    ServiceCl.log(["Inited: " + this.constructor.name,this.htmlItem_]);
  }
  controlType(){
    return ModelContainer.HtmlItemType(this.htmlItem_);
  }
  mouseenter_(i_:any){
    ServiceCl.log(["mouseenter_",i_]);
    i_.stopPropagation();
    i_.fromElement.style.background='grey';
    // this.itemColor= {background:'rgba(200,200,200,0.8)'};
  }
  mouseleave_(i_:any){
    ServiceCl.log(["mouseleave_",i_]);
    i_.stopPropagation();
    i_.fromElement.style.background='white';
  }
  mouseIsHovered_(i_:any){

  }
}
