import { Component, OnInit,Input } from '@angular/core';
import {ServiceCl,Service_} from '../Services/services.component'
import {Factory_,Quiz,Test,NodeCollection,QuizParameter,ItemParameter,TestGapPickerParameter  } from '../Models/inits.component'
import { HtmlItem,TextControl,CheckBoxControl,RadioButtonControl,DatePickerControl,NumberPickerControl
,QuizControls } from '../Models/inits.component'
import {Button} from 'app/app7/Models/inits.component'

import * as SVG from 'assets/svg.js'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  cName:string;
  test: boolean;

  nodes_:NodeCollection;
  nodeToPass_:NodeCollection;

  itemValueToPass_:{key:string,value:number,min:number,max:number};
  itemValueArrToPass_:[{key:string,value:number,min:number,max:number}];
  itemValueDrop_:{key:string,values:[{value:number,checked:boolean}]};
  itemValueArrDrop_:[{key:string,values:[{value:number,checked:boolean}]}];

  testGapPickerParameter_:TestGapPickerParameter;

  htmlItemsArr:[NodeCollection]=[
    new TextControl(0,"Tb","text_nm","Type text","Type here",null,2,4,true,"flex-container fxvt")
    ,new TextControl(0,"Tb","text_nm","Type text2","Type here2",null,1,3,true,"flex-container fxhr")
    ,new CheckBoxControl(0,"Cb","To Check or not to check",true,true,"flex-container fxvt")
    ,new CheckBoxControl(0,"Cb","To Check or not to check2",false,true,"flex-container fxhr")
    ,new DatePickerControl(0,"Dp","Choose date",new Date(2001,11,11,11,11,1),true)
  ];

  quizControls_:QuizControls;

  constructor(private service:Service_){
    //service.test=false;
    this.test=service.test;
    this.cName=this.constructor.name;
    this.genTest();
    this.gapPickerTest();

    ServiceCl.log(["Constructor: " + this.constructor.name,this.nodes_]);
  }
  genTest(){
      this.nodes_=Test.GenClasses(false,1,4);

      ServiceCl.log(this.nodes_);
  }
  gapPickerTest(){
    this.nodeToPass_=this.nodes_.collection.array[0];
    ServiceCl.log(["gapPickerTest: ",this.nodeToPass_])
  }
  keyValueGen(){
    this.itemValueToPass_=
      {key:"Years",value:0,min:0,max:1000}

    this.itemValueArrToPass_=[
      {key:"Years",value:0,min:0,max:1000}
      ,{key:"Months",value:0,min:0,max:1000}
      ,{key:"Days",value:0,min:0,max:1000}
      ,{key:"Hours",value:0,min:0,max:1000}
      ,{key:"Minutes",value:0,min:0,max:1000}
      ,{key:"Seconds",value:0,min:0,max:1000}
    ]

    this.itemValueDrop_={key:"DayOfWeek",values:[
      {value:1,checked:false}
      ,{value:2,checked:true}
      ,{value:3,checked:false}
    ]}

    this.itemValueArrDrop_=[
        this.itemValueDrop_
        ,{key:"DayOfMonth",values:[
          {value:1,checked:false}
          ,{value:2,checked:true}
          ,{value:3,checked:false}
          ,{value:4,checked:true}
        ]}
        ,{key:"Week of year",values:[
          {value:1,checked:false}
          ,{value:2,checked:true}
          ,{value:3,checked:false}
          ,{value:4,checked:false}
          ,{value:5,checked:true}
        ]}
        ,{key:"Month of year",values:[
          {value:1,checked:false}
          ,{value:2,checked:true}
          ,{value:3,checked:false}
          ,{value:4,checked:false}
          ,{value:5,checked:true}
          ,{value:6,checked:true}
          ,{value:11,checked:true}
        ]}
        ,{key:"Month of Century",values:[
          {value:1,checked:false}
          ,{value:2,checked:true}
          ,{value:3,checked:false}
          ,{value:4,checked:false}
          ,{value:5,checked:true}
          ,{value:6,checked:true}
          ,{value:11,checked:true}
        ]}
    ]

    this.testGapPickerParameter_=new TestGapPickerParameter(this.itemValueArrToPass_,this.itemValueArrDrop_);
  }
  ngOnInit() {
    this.keyValueGen();
    ServiceCl.log(["Inited: " + this.constructor.name,this.nodes_,this.nodeToPass_]);
  }
  click_($event){
    ServiceCl.log(["click_ : " + this.constructor.name,event]);
  }

  submitNew(event:any){
    ServiceCl.log(["submitNew: ",this.htmlItemsArr,event]);
  }
}
