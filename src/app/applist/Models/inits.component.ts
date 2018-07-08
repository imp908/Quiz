import {ServiceCl} from '../Services/services.component';
import { EventEmitter,Output } from '@angular/core';

//TS Collections
//npm install typescript-collections [-g] --save

import * as Collections from 'typescript-collections';

import {INode,ICollection_,INodeCollection} from './POCO.component';

//option constructors

class NodeG implements INode{
  _key:number;
  _name:string;
  _value:string;
  typeName:string;
  constructor(options:{key_:number,name_:string, value_:string}={key_:0,name_ : "",value_:""})
  {
    this._key=options.key_;
    this._name=options.name_;
    this._value=options.value_;
  }
}

class CollectionG_<T extends NodeG> implements ICollection_<T>{
  array:Array<T>;
  tolog:boolean;
  type_:string;

  constructor(options:{array_?:Array<T>}={array_:new Array<T>()}){
    this.array=options.array_;
  }

  add(item:T){
    var max=0;
    var toPsuh:boolean=false;

    if(typeof(this.array)=='undefined'){
      ServiceCl.log("PrimitiveCollection array Undefined")
      this.array=Array<T>();
      toPsuh=true;
    }else{

      max=this.getMaxKey();
      ServiceCl.log(["PrimitiveCollection array defined. max = ",max])

      if(item._key==null){
          max+=1;
          toPsuh=true;
          ServiceCl.log(["item has no key. Max=  ",max])
      }else{
        ServiceCl.log(["item has key: ",item._key])

        if((this.getByItem(item)==null)){
          max+=1;
          toPsuh=true;
          ServiceCl.log(["item not exists. max= ",max])
        }

      }

    }

    if(toPsuh===true){
      item._key=max;
      this.array.push(item);
    }
    return item;
  }

  delete(item:T){
    if(typeof(this.array)!=null){
      var index_:number=this.getIndexByItem(item)
      if(index_!=-1){
        this.array.splice(index_,1);
        return this.array
      }
    }
    return null;
  }
  update(item:T){
    if((typeof(this.array)!=null)){
      var index_=this.array.findIndex(s=>s._key===item._key);
      if(index_!=-1){
          this.array[-1]=item;
          return this.array[-1];
      }
    }
    return null;
  }

  addUpdate(item:T){
    if((typeof(this.array)!=null)){
      var index_=this.array.findIndex(s=>s._key===item._key);
      ServiceCl.log(index_);
        if(index_!=null){
          ServiceCl.log("Add");
          this.add(item);
        }else{
          ServiceCl.log("Update");
          this.update(item);

        }
    }
  }

  addUpdateArr(items:Array<T>){
    for(var item of items){
      this.addUpdate(item);
    }
  }

  getMaxKey(){
    if(typeof(this.array)!=null){
      var max=Math.max.apply(Math,this.array.map(function(o){return o._key;}))
      if(max!=null){
        return max;
      }
    }
    return null;
  }
  getByItem(item:T){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s._key===item._key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getByName(item:string){
    if(typeof(this.array)!=null){
      var ret=this.array.find(s=>s._name===item);
      if(ret!=null){
        return ret;
      }
    }
    return null;
  }
  getByKey(key:number){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s._key===key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getIndexByItem(item:T){
    if(typeof(this.array)!=null){
      return this.array.findIndex(s=>s._key===item._key);
    }
    return -1;
  }
  getIndexBykey(key:number){
      if(typeof(this.array)!=null){
        return this.array.findIndex(s=>s._key===key);
      }
      return -1;
    }

  isUndefined(arr_:Array<T>):boolean{
    if(typeof(arr_)=='undefined'){
      if(this.tolog){
        ServiceCl.log("PrimitiveCollection array Undefined")
      }
      return true;
    }
    return false;
  }
  getType(){
    return typeof this.type_;
  }

  setType(type_:string){
    this.type_=type_;
  }

  sortAsc(a:T,b:T){
    if(a._key>b._key){return 1}
    if(a._key<b._key){return -1}
    return 0;
  }
  sortDesc(a:T,b:T){
    if(a._key>b._key){return -1}
    if(a._key<b._key){return 1}
    return 0;
  }
  sort(asc:boolean){
    let a:Array<T>;
    if(asc){
      a=this.array.sort(this.sortAsc);
    }else{a=this.array.sort(this.sortDesc);}
    return a;
  }

  shallowCopy(){};
}

//parameter constructions

class Node implements INode{
  _key:number;
  _name:string;
  _value:string;
  typeName:string;
  static __key:number;

  constructor(key_?:number,name_?:string, value_?:string)
  {
    if(key_!=null){Node.__key=key_;this._key=key_;}else{
      if(Node.__key!=null){Node.__key+1;}else{Node.__key=0;}
    }
    if(name_!=null){this._name=name_;}
    if(value_!=null){this._value=value_;}
    this.typeName=this.constructor.name;
  }

}
export class Collection_<T extends Node> implements ICollection_<T>{
  array:Array<T>=new Array<T>();
  tolog:boolean=false;
  type_:string;

  constructor(array_?:Array<T>){
    if(array_!=null){this.array=array_;}
  }

  add(item:T){
    var max=0;
    var toPsuh:boolean=false;

    if(typeof(this.array)=='undefined'){
      if(this.tolog){
        ServiceCl.log("PrimitiveCollection array Undefined")
      }
      this.array=Array<T>();
    }

    max=this.getMaxKey();

    if(this.tolog){
      ServiceCl.log(["PrimitiveCollection array max = ",max])
    }

    if(item._key==null){

      //tolog
      if(this.tolog){ServiceCl.log(["Item key is null"])}

      if(max!=-1){

        //tolog
        if(this.tolog){ServiceCl.log(["array contains some elements"])}

        max+=1;
        item._key=max;
        toPsuh=true;
      }else{
        //tolog
        if(this.tolog){ServiceCl.log(["array contains no elements"])}
        item._key=0;
        toPsuh=true;
      }

    }else{

      //tolog
      if(this.tolog){ServiceCl.log(["Item key is: ",item._key])}

      if(max!=-1){
        //tolog
        if(this.tolog){ServiceCl.log(["Array not empty"])}

          if((this.getByItem(item)!=null)){
            //tolog
            if(this.tolog){ServiceCl.log(["Array contains item: ",item])}

            max+=1;
            item._key=max;
            toPsuh=true;

          }else
          {
            //tolog
            if(this.tolog){ServiceCl.log(["Array not contains item"])}
            toPsuh=true;
          }
      }else{
        //tolog
        if(this.tolog){ServiceCl.log(["Array is empty"])}
        toPsuh=true;
      }

    }



    if(toPsuh===true){
      if(this.tolog){ServiceCl.log(["pushing item with key: ",item,max])}
      this.array.push(item);
    }
    this.setType(item._name);
    return item;
  }

  delete(item:T){
    if(typeof(this.array)!=null){
      var index_:number=this.getIndexByItem(item)
      if(index_!=-1){
        this.array.splice(index_,1);
        return this.array
      }
    }
    return null;
  }
  update(item:T){
    var max=0;
    var toPsuh:boolean=false;

    if(typeof(this.array)!=null){
      //log
      if(this.tolog){ServiceCl.log("PrimitiveCollection array exists")}
      max=this.getMaxKey();
      if(max>-1){
        //log
        if(this.tolog){ServiceCl.log("Array contains items")}
        var index_=this.array.findIndex(s=>s._key===item._key);
        if(index_!=-1){
          //log
          if(this.tolog){ServiceCl.log(["Array contains item",item])}
            this.array[item._key]=item;
        }
      }
    }

    return this.array;
  }

  addUpdate(item:T){
    if((typeof(this.array)!=null)){
      var index_=this.array.findIndex(s=>s._key===item._key);
      if(this.tolog){
      ServiceCl.log(index_);
        if(index_!=null){
          ServiceCl.log("Add");
          this.add(item);
        }else{
          ServiceCl.log("Update");
          this.update(item);

        }
      }
    }
  }

  addUpdateArr(items:Array<T>){
    for(var item of items){
      this.addUpdate(item);
    }
  }

  getMaxKey(){
    if(typeof(this.array)!=null){
      var max=Math.max.apply(Math,this.array.map(function(o){return o._key;}))
      if(!isFinite(max)){
        //ServiceCl.log("Max infinite")
        max=-1
      }
      if(max!=null){
        return max;
      }
    }
    return null;
  }
  getByItem(item:T){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s._key===item._key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getByName(item:string){
    if(typeof(this.array)!=null){
      var ret=this.array.find(s=>s._name===item);
      if(ret!=null){
        return ret;
      }
    }
    return null;
  }
  getByKey(key:number){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s._key===key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getIndexByItem(item:T){
    if(typeof(this.array)!=null){
      return this.array.findIndex(s=>s._key===item._key);
    }
    return -1;
  }
  getIndexBykey(key:number){
      if(typeof(this.array)!=null){
        return this.array.findIndex(s=>s._key===key);
      }
      return -1;
    }

  isUndefined(arr_:Array<T>):boolean{
    if(typeof(arr_)=='undefined'){
      if(this.tolog){
        ServiceCl.log("PrimitiveCollection array Undefined")
      }
      return true;
    }
    return false;
  }

  getType():string {
    return this.type_;
  }
  setType(type_:string){
    this.type_=type_;
  }

  sortAsc(a:T,b:T){
    if(a._key>b._key){return 1}
    if(a._key<b._key){return -1}
    return 0;
  }
  sortDesc(a:T,b:T){
    if(a._key>b._key){return -1}
    if(a._key<b._key){return 1}
    return 0;
  }
  sort(asc:boolean){
    let a:Array<T>;
    if(asc){
      a=this.array.sort(this.sortAsc);
    }else{a=this.array.sort(this.sortDesc);}
    return a;
  }


}

export class NodeCollection extends Node{

  parentKey:number;

  collection:ICollection_<INodeCollection>;
  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>)
  {
    super(key_,name_,value_);
    if(collection_!=null){this.collection=collection_;}
    if(collection_===undefined){this.collection=new Collection_<NodeCollection>();}
    if(collection_===null){this.collection=null;}
    this.typeName=this.constructor.name;
  }

  getType_():string {

      //return this.collection.getType();
    if(this.collection!=null){
      return this.constructor.name;
    }
  }
  sortHierarhy(asc:boolean){
    if((this.collection!=null)){
      // console.log("sort");
      this.collection.sort(asc);
      if((this.collection.array!=null) && (this.collection.array.length!=-1)){
          for(let i =0;i<this.collection.array.length;i++){
            // console.log("go deeper");
            this.collection.array[i].sortHierarhy(asc);
          }
      }
    }
  }

  //Recursive array collection search

  scan(name_:string,col_:NodeCollection){
    let ret_:NodeCollection=null;
    ret_=this.findInParams(name_,col_,ret_);
    return ret_;
  }
  findInParams(name_:string,col_:NodeCollection,ret_:NodeCollection){
    // console.log(["findInParams: ",col_])

    if(col_.collection!=null){
      if(col_.collection.array!=null){
        if(col_.collection.array.length>0){
          for(let i=0;i<=col_.collection.array.length;i++){
            let tCol_=col_.collection.array[i];
            // console.log(["For: ",tCol_])
            if(tCol_!=null){
              if(tCol_._name==name_){
                // console.log(["Return: ",tCol_])
                ret_=tCol_;
              }
              if(tCol_.collection!=null){
                ret_=this.findInParams(name_,tCol_,ret_);
              }
            }
          }
        }
      }
    }

      return ret_;
  }

  _hasArray(){
    if(this._hasCollection()){
      if(this.collection.array!=null){
        if(this.collection.array.length>0){
          return true;
        }
      }
    }
    return false;
  }
  _hasCollection(){
    if((this.collection!=null)
    ){
      return true;
    }else{return false;}
  }

}

// obsolete ItemParameters replaced with HtmlItem

export class ItemParameter extends NodeCollection{
  //instance if value to get type, not to pass string
  valueItem:any;
  //name of velue type
  valueType:string;
  //value of passed value type
  //exmpl: new Date(), new Date(2015,01,01)
  //or: "text type","text value"
  valueVal:any;

  cssType:string;
  templateClass:string;
  show:boolean;

  constructor(valueItem_:any,valueVal_:any,name_?:string, value_?:string,show_?:boolean,collection_?:ICollection_<INodeCollection>,key_?:number)
  {
    super(key_,name_,value_,collection_);
    this.cssType="";
    this.valueItem=valueItem_;
    this.valueVal=valueVal_;

    this.show=false;

    //different html input CSS types for variable classes
    //boolean -> checlbox

    //++ template classes for custom html elements
    //datepicker -> datepicker component

    if(show_!=null){
      this.show=show_;
    }
    if( typeof this.valueItem === "boolean")
    {
      this.valueType="boolean";
      this.cssType+="checkbox"
      this.templateClass=null;
    }
    if( typeof this.valueItem === "string")
    {
      this.valueType="text";
      this.cssType+="text";
      this.templateClass=null;
    }
    if( this.valueItem instanceof Date)
    {
      this.valueType="date";
      this.cssType=null;
      this.templateClass="datepicker";
    }
    if( this._name == "TimePicker")
    {
      this.valueType="date";
      this.cssType=null;
      this.templateClass="timepicker";
    }
    if( this._name == "GapPicker")
    {
      this.valueType="date";
      this.cssType=null;
      this.templateClass="gappicker";
    }

  }

}
export class QuizParameter extends ItemParameter{

  constructor(valueItem_:any,valueVal_:any,name_?:string, value_?:string,show_?:boolean,collection_?:ICollection_<INodeCollection>,key_?:number)
  {
    super(valueItem_,valueVal_,name_,value_,show_,collection_,key_);
    this.defaultInit();
    this.conditionsCheck();
  }

    defaultInit(){
      this.collection=new Collection_<ItemParameter>([
      new ItemParameter(true,false,"Replayabe","Replayable",true,null,10)
      ,new ItemParameter(new Date(),null,"StartDate","Start date",true,null,0)
      ,new ItemParameter(new Date(),null,"TimePicker","Start time",true,null,5)
      ,new ItemParameter(true,true,"Anonimous","Anonimous",true,null,20)
      ,new ItemParameter(true,false,"GapPicker","Replay gap pick",false,null,15)
      ,new ItemParameter("","value test text","Test","Test Text",true,null,100)
    ]);
      this.collection.setType("ItemParameter");
      this.collection.sort(true);
    }

    conditionsCheck(){

      let i=this.collection.array.find(s=>s._name=="Replayabe");
        if(i instanceof ItemParameter){
        let ii=this.collection.array.find(s=>s._name=="GapPicker");
          if( ii instanceof ItemParameter){
            ii.show=i.valueVal;
          }
        }

    }

}


//Model generating form controls from code

export class HtmlItem extends NodeCollection{

  //inherited

  //key - sorting ID
  //name - grouping name
  //value - display name

  //input
  HtmlClass:string;
  //input type:"" [text,checkbox,radio]
  HtmlTypeAttr:string;

  //submitted value
  HtmlSubmittedValue:any;

  //show checkedToggle
  show:boolean;

  cssClass:string;

  constructor(key_:number,name_:string,value_:string,HtmlClass_:string,HtmlTypeAttr_:string,HtmlSubmittedValue_:any
    ,show_:boolean,cssClass_?:string,collection_?:ICollection_<INodeCollection>){
    super(key_,name_,value_,collection_)
    this.HtmlClass=HtmlClass_;
    this.HtmlTypeAttr=HtmlTypeAttr_;
    this.HtmlSubmittedValue=HtmlSubmittedValue_;
    this.show=true;
    if(show_==null){this.show=show_};
    this.cssClass=cssClass_;
  }

}
export class TextControl extends HtmlItem{

  pattern:string;
  maxLength:number;
  minLength:number;
  //default initialize value to pass to form
  displayValue:any

  constructor(key_:number,name_:string,value_:string, displayValue_:any,HtmlSubmittedValue_:any
    ,pattern_?:string,minLen_?:number,maxLen_?:number,show_?:boolean,cssClass_?:string){

    super(key_,name_,value_,"input","text",HtmlSubmittedValue_,show_,cssClass_,null)

    this.maxLength=null;
    this.minLength=null;
    this.pattern==null;
    this.displayValue=null;

    if(maxLen_!=null){
      this.maxLength=maxLen_;}
    if(minLen_!=null){
      this.minLength=minLen_;}
    if(pattern_!=null){
      this.pattern=pattern_};
    if(displayValue_!=null){
      this.displayValue=displayValue_;}

  }
}
export class CheckBoxControl extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:any
    ,show_?:boolean,cssClass_?:string){
    super(key_,name_,value_,"input","checkbox",HtmlSubmittedValue_,show_,cssClass_,null)
  }
}
export class RadioButtonControl extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:string
      ,show_:boolean
      ,cssClass_:string
      ,collection_:ICollection_<INodeCollection>){
    super(key_,name_,value_,"input","radio",HtmlSubmittedValue_,show_,cssClass_,collection_)
  }
}
export class DropDownControlNg extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:string
      ,show_:boolean
      ,cssClass_:string
      ,collection_:ICollection_<INodeCollection>){
    super(key_,name_,value_,"input","dropdown",HtmlSubmittedValue_,show_,cssClass_,collection_)
  }
}
export class DropDownControlMultiNg extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:string
      ,show_:boolean
      ,cssClass_:string
      ,collection_:ICollection_<INodeCollection>){
    super(key_,name_,value_,"input","dropdown",HtmlSubmittedValue_,show_,cssClass_,collection_)
  }
}
export class DropDownControlMulti extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:string
      ,show_:boolean
      ,cssClass_:string
      ,collection_:ICollection_<INodeCollection>){
    super(key_,name_,value_,"input","dropdown",HtmlSubmittedValue_,show_,cssClass_,collection_)
  }
}
export class DatePickerControl extends HtmlItem{
  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:Date ,show_:boolean,cssClass_?:string){
    super(key_,name_,value_,"input","datepicker",HtmlSubmittedValue_,show_,cssClass_,null)
  }
}
export class NumberPickerControl extends HtmlItem{

  minN?:number;
  maxN?:number;

  constructor(key_:number,name_:string,value_:string, HtmlSubmittedValue_:number
    ,min_?:number,max_?:number,show_?:boolean,cssClass_?:string){
    super(key_,name_,value_,"input","numberpicker",HtmlSubmittedValue_,show_,cssClass_,null)

    this.minN=null;
    this.maxN=null;

    if(min_!=null){this.minN=min_;}
    if(max_!=null){this.maxN=max_;}

  }

}

// Default Quiz form controllers

export class QuizControls extends HtmlItem{

  constructor(option:{cssClass_:string,show_:boolean,collection_?:Collection_<HtmlItem>}
  ={cssClass_:"",show_:true,collection_:null})
  {
    let qzcl=Factory_.QuizControlsGen();

    super(0,"QuizControlGroup","QuizControlGroup","div","",null,option.show_,option.cssClass_,qzcl);
    this.sortHierarhy(true);
  }

}

export class QuestionControls extends HtmlItem{

  constructor(option:{cssClass_:string,show_:boolean,collection_?:Collection_<HtmlItem>}
  ={cssClass_:"",show_:true,collection_:null})
  {
    let qzcl=Factory_.QuestionControlsGen();

    super(0,"QuestionControlGroup","Question","div","",null,option.show_,option.cssClass_,qzcl);
    this.sortHierarhy(true);
  }

}

export class AnswerControls extends HtmlItem{

  constructor(option:{cssClass_:string,show_:boolean,collection_?:Collection_<HtmlItem>}
  ={cssClass_:"",show_:true,collection_:null})
  {
    let qzcl=Factory_.AnswerControlsGen();

    super(0,"AnswerControlGroup","Answer","div","",null,option.show_,option.cssClass_,qzcl);
    this.sortHierarhy(true);
  }

}

// obsolete est itemp params

class ItemValue {key:string;value:number;min:number;max:number}
class ItemDrop {key:string;values:[{value:number;checked:boolean}]}
export class TestGapPickerParameter{
  itemValueArr_:Array<ItemValue>;
  itemValueArrDrop_:Array<ItemDrop>;
  constructor(itemValue_:[ItemValue],itemDrop:[ItemDrop]){
    this.itemValueArr_=itemValue_;
    this.itemValueArrDrop_=itemDrop;
  }
}


export class QuizItem extends HtmlItem{

  //Collection of formcontroll to generate for user input

  itemParameter:HtmlItem;

  //Collection of gormcontrols to generate for read

  quizStatistic:NodeCollection;

  constructor(
    option:{key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,itemParameter_?:HtmlItem,quizStatistic_?:NodeCollection}
    ={key_:0,name_:"QuizItem",value_:null,collection_:null,itemParameter_:new HtmlItem(0,"","","","","",true,"",null)}
    ){

      //NodeCollection initializer

      // super(option.key_,option.name_,option.value_,option.collection_);

      //HtmlItem super init

      super(option.key_,option.name_,option.value_,"","",null,true,"",option.collection_);

      this.typeName="QuizItem";
      if(option.collection_==null){
        this.collection=new Collection_<NodeCollection>();
      }

      if(option.itemParameter_!=null){
        this.itemParameter=option.itemParameter_;
      }else{this.itemParameter=new HtmlItem(0,"","","","","",true,"",null);}

  }

}

export class Quiz extends QuizItem{

  replay:boolean;
  startTime:Date;
  timeGap:Date;
  anonimous:boolean;

  //Collection of formcontroll to generate for user input

  itemParameter:QuizControls;

  //Collection of gormcontrols to generate for read

  quizStatistic:QuizStatistic;

  constructor(
    option:{key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,itemParameter_?:QuizControls,quizStatistic_?:QuizStatistic}
    ={key_:0,name_:"Quiz",value_:null,collection_:null,itemParameter_:new QuizControls(),quizStatistic_:new QuizStatistic()}
    ){
      super(option);
      this.replay=true;
      this.anonimous=false;

      this.typeName="Question";
      if(option.collection_==null){
        this.collection=new Collection_<Question>();
      }

      if(option.itemParameter_!=null){
        this.itemParameter=option.itemParameter_;
      }else{this.itemParameter=new QuizControls();}

      if(option.quizStatistic_!=null){
        this.quizStatistic=option.quizStatistic_;
      }else{
        this.quizStatistic=new QuizStatistic();
      }

    }
  scanParameters(name_:string){
    return this.scan(name_,this.itemParameter);
  }
}
export class Questionarie extends Quiz{}
export class Victorine extends Quiz{}

export class Question extends QuizItem{
  itemParameter:HtmlItem;

  constructor(option_:{key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>,itemParameter_?:HtmlItem}
    ={key_:0,name_:"Question",value_:"Question",collection_:new Collection_<Answer>(null),itemParameter_:new QuestionControls()})
    {
      super(option_);
      this.typeName="Question";
      this.itemParameter=option_.itemParameter_;
      this.collection=option_.collection_;
      if(option_.itemParameter_==null){
        this.itemParameter=new QuestionControls();
      }
      if(option_.collection_==null){
        this.collection=new Collection_<Answer>(null);
      }
    }

}
export class Answer extends QuizItem{
  itemParameter:HtmlItem;

  constructor(option_:{key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>,itemParameter_:HtmlItem}
    ={key_:0,name_:"Answer",value_:"Answer",collection_:new Collection_<Answer>(),itemParameter_:new AnswerControls()})
    {
      super(option_);
      this.typeName="Answer";
      this.itemParameter=option_.itemParameter_;
      this.collection=option_.collection_;
      if(option_.itemParameter_==null){
        this.itemParameter=new AnswerControls();
      }
      if(option_.collection_==null){
        this.collection=null;
      }
    }

}


export class QuizStatistic extends HtmlItem{
  passedQuantityAll:number;
  rejectedQuantityAll:number;

  ratedTimes:number;
  rating:number;

  aftertestStatisticsShow:boolean;
  questionsByList:boolean;

  //default object initializer

  constructor(options:{
    value_:string,HtmlClass_:string,HtmlTypeAttr_:string,HtmlSubmittedValue_:any
    ,passedQuantityAll_:number
    ,show_:boolean,cssClass_?:string
    } = {
      value_:"QuizStatisticValue",HtmlClass_:"div",HtmlTypeAttr_:"",HtmlSubmittedValue_:null
      ,passedQuantityAll_:0
      ,show_:true,cssClass_:""
    }
    ){
      // constructor(name_:string,value_:string,HtmlClass_:string,HtmlTypeAttr_:string,HtmlSubmittedValue_:any
      //   ,options:{passedQuantityAll_:number},show_:boolean,cssClass_?:string ){

      super(0,"QuizStatistic",options.value_,options.HtmlClass_,options.HtmlTypeAttr_,options.HtmlSubmittedValue_,options.show_,options.cssClass_,null)

      this.passedQuantityAll=options.passedQuantityAll_;

    }

}

//unused temp

class ButtonAction {
  actionType:string;
  passedElementName:string;
  passedOject:any;
  constructor(at_:string,pen_?:string,obj_?:any){
    this.actionType=at_;

    this.passedElementName=""
    if(pen_!=null){this.passedElementName=pen_}
    if(pen_===null){this.passedElementName=null}

    this.passedOject=null
    if(obj_!=null){this.passedOject=obj_}

  }
}
export class Button extends NodeCollection {

  htmlClass:string;
  clicked:boolean;
  toolTipText:string;
  disabled_:boolean;

  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,htmlClass_?:string,clicked_?:boolean,toolTipText_?:string){
    super(key_,name_,value_,collection_);
    this.htmlClass="";
    if(htmlClass_!=null){
      this.htmlClass=htmlClass_;
    }
    this.clicked=false;
    if(clicked_!=null){
      this.clicked=clicked_;
    }
    this.toolTipText="";
    if(toolTipText_!=null){
      this.toolTipText=toolTipText_;
    }
    this.disabled_=false;
  }

}
export class itemButtons extends Button{

  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,htmlClass_?:string,clicked_?:boolean,toolTipText_?:string){
      super(key_,name_,value_,collection_,htmlClass_,clicked_,toolTipText_);

      //this.collection.add(new Button(null,"Edit_","Edit",null,"btn btn-primary",false,"Edit "))
      //this.collection.add(new Button(null,"Delete_","Delete",null,"btn btn-danger",false,"Delete "))

        this.collection.add(new Button(null,"Edit_","Edit",null,"btn btn-purple",false,"Edit "))
        this.collection.add(new Button(null,"Delete_","Delete",null,"btn btn-unique",false,"Delete "))
    }
}
export class menuButtons extends Button{

    constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
      ,htmlClass_?:string,clicked_?:boolean,toolTipText_?:string){
      super(key_,name_,value_,collection_,htmlClass_,clicked_,toolTipText_);
      this.collection.add(new Button(null,"Add_","Add new",null,"btn btn-purple-gradient",false,null))

      /*
      this.collection.add(new Button(null,"Test1","Test button 1",null,"btn btn-evening-night",false,"Button for test1"))
      this.collection.add(new Button(null,"Test2","Test button 2",null,"btn btn-red-sunset",false,"Testing button"))
      this.collection.add(new Button(null,"Test3","Test button 3",null,"btn",false))
      this.collection.add(new Button(null,"Test3","Test button 4",null,"btn",false))
      this.collection.add(new Button(null,"Test3","Test button 5",null,"btn",false))
      this.collection.add(new Button(null,"Test3","Test button 6",null,"btn btn-success",false))
      */
    }
}


export class ModelContainer{

  static nodesPassed_:NodeCollection;
  static nodeToEdit:NodeCollection;

  static QuizToEdit:Quiz;
  static QuestionToEdit:Question;
  static AnswerToEdit:Question;

  static buttonClicked:Button;

  @Output() static nodeEmitted=new EventEmitter<NodeCollection>();
  @Output() static nodeSavedNew=new EventEmitter();
  @Output() static nodeSaved=new EventEmitter();
  @Output() static nodeAdded=new EventEmitter<NodeCollection>();
  @Output() static nodeDeleted=new EventEmitter<NodeCollection>();

  @Output() static saveDisabled=new EventEmitter<boolean>();
  @Output() static addNewToggle=new EventEmitter<boolean>();

  @Output() static questionTypeAlert=new EventEmitter<string>();

  //Buutons to be disabled on conditions

  static saveButtons_:Button;
  static saveNewButtons_:Button;

  static Init(){

    ModelContainer.nodesPassed_=Test.GenClasses(false,1,4);
    ModelContainer.CheckCycleDisplay();
    ModelContainer.saveButtons_=Factory_.saveButton();
    ModelContainer.saveNewButtons_=Factory_.saveNewButton();
    // ModelContainer.saveButtons_.collection.add(Factory_.saveButton());
    // ModelContainer.saveNewButtons_.collection.add(Factory_.saveNewButton());


  }

  static clickStageDetect(b_:Button,n_:any){
    ServiceCl.log(["clickStageDetect",b_,n_]);
    console.log(["instanceof: ",b_]);

    if((b_._name!="SaveNew_") && (b_._name!="Add_")){

      if(b_._name=="Edit_"){
        ServiceCl.log(["Edit_"]);
        let bt= ModelContainer.saveButtons_;

        // if(bt instanceof Button){ bt.disabled_=false;}

        ModelContainer.nodeSelect(n_);
      }
      if(b_._name=="Delete_"){
        ServiceCl.log("Delete_");
        ModelContainer.nodeDelete(n_);
      }
      if(b_._name=="Save_"){
        ServiceCl.log("Save_");
        ModelContainer.nodeSave(n_);
      }
      if(b_._name=="Copy_"){
        ServiceCl.log("Copy_");
        ModelContainer.nodeCopySelect(n_);
      }
      ModelContainer.CheckAnswerAmount(false);
    }

    if((b_._name=="SaveNew_") || (b_._name=="Add_")){
      if(b_._name=="Add_"){
        ServiceCl.log(["Add_"]);
        ModelContainer.nodeNewSelect(n_)
      }
      if(b_._name=="SaveNew_"){
        ServiceCl.log("SaveNew_");
        ModelContainer.nodeSaveNew(n_);
      }
      ModelContainer.CheckAnswerAmount(true);
    }

  }
  static classDetectNState(n_:NodeCollection){
    if(n_ instanceof Quiz){
      ServiceCl.log(["Quiz selected",n_]);
      ModelContainer.QuizToEdit=n_;
      ModelContainer.QuestionToEdit=null;
      ModelContainer.AnswerToEdit=null;
    }
    if(n_ instanceof Question){
      ServiceCl.log(["Question selected",n_]);
      ModelContainer.QuestionToEdit=n_;
      ModelContainer.AnswerToEdit=null;
    }
    if(n_ instanceof Answer){
      ServiceCl.log(["Answer selected",n_]);
      ModelContainer.AnswerToEdit=n_;
    }
  }
  static createCopy(item_:NodeCollection):NodeCollection{
    let _item:NodeCollection;
    if(item_ instanceof Quiz){
      _item=new Quiz({key_:item_._key,name_:item_._name,value_:item_._value,collection_:item_.collection,itemParameter_:item_.itemParameter});
    }
    if(item_ instanceof Question){
      _item=new Question({key_:item_._key,name_:item_._name,value_:item_._value,collection_:item_.collection,itemParameter_:item_.itemParameter});
    }
    if(item_ instanceof Answer){
      _item=new Answer({key_:item_._key,name_:item_._name,value_:item_._value,collection_:item_.collection,itemParameter_:item_.itemParameter});
    }
    return _item;
  }
  static saveTo(from_:NodeCollection,to_:NodeCollection){
    to_._name=from_._name;
    to_._value=from_._value;
    to_.collection=from_.collection;
    if(from_ instanceof Question && to_ instanceof Question){
      to_.itemParameter=from_.itemParameter;
    }
  }

  static nodeCopySelect(n_:NodeCollection){
    let type_:string=n_.typeName;
    ServiceCl.log(["nodeAdd emitted",n_,type_]);
    let nd_:any;

    if(n_ instanceof QuizItem){
      nd_=Factory_._Clone(n_);
    }

    //ModelContainer.nodeToEdit=nd_;

    ModelContainer.nodeAdded.emit(nd_);

  }

  static nodeNewSelect(n_:NodeCollection){
    let type_:string=n_.typeName;
    ServiceCl.log(["nodeAdd emitted",n_,type_]);
    let nd_:any;
    if(n_ instanceof NodeCollection){
      nd_=new Quiz({key_:0,name_:"Add new Quiz",value_:"Add new Quiz",collection_:null,itemParameter_:null});
    }
    if(n_ instanceof Quiz){
      nd_=new Question({key_:0,name_:"Add new question",value_:"Add new question"});
    }
    if(n_ instanceof Question){
      nd_=new Answer({key_:0,name_:"Add new answer",value_:"Add new answer",collection_:null,itemParameter_:null});
    }
    //ModelContainer.nodeToEdit=nd_;

    ModelContainer.nodeAdded.emit(nd_);
  }
  static nodeSaveNew(n_:NodeCollection){
    ServiceCl.log(["nodeSaveNew",n_,ModelContainer]);
    if(n_ instanceof Answer)
    {
        ServiceCl.log(["Answer",n_]);
        this.QuestionToEdit.collection.add(n_);
    }
    if(n_ instanceof Question)
    {
        ServiceCl.log(["Question",n_]);
        this.QuizToEdit.collection.add(n_);
        this.AnswerToEdit=null;
        this.QuestionToEdit=null;
    }
    if(n_ instanceof Quiz)
    {
        ServiceCl.log(["Quiz to collection",n_,this.nodesPassed_]);
        ModelContainer.nodesPassed_.collection.add(n_);
        ModelContainer.AnswerToEdit=null;
        ModelContainer.QuestionToEdit=null;
        ModelContainer.QuizToEdit=null;
    }
    ModelContainer.nodeSavedNew.emit(n_);
  }

  static nodeSelect(n_:NodeCollection){
    ServiceCl.log(["nodeSelect:",n_]);

    ModelContainer.nodeToEdit=n_;

    ModelContainer.classDetectNState(n_);
    let nd_:NodeCollection=ModelContainer.createCopy(n_);
    ModelContainer.nodeEmitted.emit(nd_);

    ServiceCl.log(["ModelContainer:",ModelContainer]);
  }
  static nodeDelete(n_:NodeCollection){
    if(n_ instanceof Answer ){
      if(ModelContainer.QuestionToEdit != null){
        ModelContainer.QuestionToEdit.collection.delete(n_);
      }
    }
    if(n_ instanceof Question ){
      if(ModelContainer.QuizToEdit!=null){
        ModelContainer.QuizToEdit.collection.delete(n_);
        ModelContainer.QuestionToEdit=null;
        ModelContainer.AnswerToEdit=null;
      }
    }
    if(n_ instanceof Quiz ){
      if(ModelContainer.nodesPassed_ != null){
        ModelContainer.nodesPassed_.collection.delete(n_);
        ModelContainer.QuizToEdit=null;
        ModelContainer.QuestionToEdit=null;
        ModelContainer.AnswerToEdit=null;
      }
    }

    ModelContainer.nodeDeleted.emit(n_);
    ServiceCl.log(["nodeDelete",n_,ModelContainer]);
  }

  static nodeSave(n_:NodeCollection){
    ServiceCl.log(["nodeSave",n_,ModelContainer]);
    if(n_ instanceof Answer)
    {
        let quizEditable:NodeCollection=ModelContainer.nodesPassed_.collection.getByItem(ModelContainer.QuizToEdit);
        let questionEditable:NodeCollection=quizEditable.collection.getByItem(ModelContainer.QuestionToEdit);
        let answerEditable:NodeCollection=questionEditable.collection.getByItem(ModelContainer.AnswerToEdit);
        ServiceCl.log(["Save to ","Answer",n_,answerEditable]);
        ModelContainer.saveTo(n_,answerEditable);
    }
    if(n_ instanceof Question)
    {
        let quizEditable:NodeCollection=ModelContainer.nodesPassed_.collection.getByItem(ModelContainer.QuizToEdit);
        let questionEditable:NodeCollection=quizEditable.collection.getByItem(ModelContainer.QuestionToEdit);
        ServiceCl.log(["Save to ","Question",n_,questionEditable]);
        ModelContainer.saveTo(n_,questionEditable);
    }
    if(n_ instanceof Quiz)
    {
      let quizEditable:NodeCollection=ModelContainer.nodesPassed_.collection.getByItem(ModelContainer.QuizToEdit);
      ServiceCl.log(["Save to ","Quiz",n_,quizEditable]);
      ModelContainer.saveTo(n_,quizEditable);
    }

    ModelContainer.nodeSaved.emit(n_);
  }


  static checkedToggle(nodeEdited_:NodeCollection, parameterClicked_:HtmlItem){

    if(nodeEdited_ instanceof Quiz){
      let a=nodeEdited_.itemParameter.collection.getByItem(parameterClicked_);
      ServiceCl.log(["checkedToggle: " ,a]);
      a.valueVal=!a.valueVal;
    }

  }

  //Checks if cycle controlls need to be shown

  static CheckCycleDisplay(){
    if(ModelContainer.nodeToEdit instanceof Quiz)
    {
      let b=ModelContainer.nodeToEdit.itemParameter.collection.array.find(s=>s._name=="QuizCircle");
      if(b!=null){
        let c=b.collection.array.find(s=>s._name=="Cicle");
        if(c!=null){
          if(c instanceof HtmlItem){
            console.log(["CheckCycleDisplay",c]);
            ModelContainer.toggleCycleShow(c);
          }
        }
      }

    }
  }

  static toggleCycleShow(cb_:HtmlItem){
    if(cb_._name=="Cicle"){
      this.toggleShowStatus(cb_,["DateGap","CalendarControls"]);
    }
  }
  static toggleShowStatus(checkbox_:HtmlItem,toChangeName_:string[]){

    let a:HtmlItem=null;

    if(checkbox_!=null && toChangeName_ !=null ){
      // ServiceCl.log(["st",ModelContainer.nodeToEdit,toChangeName_])
      if(ModelContainer.nodeToEdit instanceof Quiz && toChangeName_.length>0){
        console.log(["toggleShowStatus: ",checkbox_]);
        for(let i=0;i<toChangeName_.length;i++){
          let b=ModelContainer.nodeToEdit.itemParameter.collection.array.find(s=>s._name==toChangeName_[i]);

          if(b instanceof HtmlItem){
            a=b;
            a.show=checkbox_.HtmlSubmittedValue;
            ServiceCl.log(["changeShowStatus: ",checkbox_,a,b]);
          }

        }
      }
    }

  }

  // rewrite to new Htmlitem

  static HtmlItemType(i:NodeCollection): string {

    if(i instanceof TextControl){return "TextControl"}
    if(i instanceof CheckBoxControl){return "CheckBoxControl"}
    if(i instanceof RadioButtonControl){return "RadioButtonControl"}
    if(i instanceof DatePickerControl){return "DatePickerControl"}
    if(i instanceof NumberPickerControl){return "NumberPickerControl"}
    if(i instanceof DropDownControlNg){return "DropDownControlNg"}
    if(i instanceof DropDownControlMultiNg){return "DropDownControlMultiNg"}
    if(i instanceof DropDownControlMulti){return "DropDownControlMulti"}
  }


  static CheckAnswerAmount(isNew_:boolean){

    let bntObj=ModelContainer.saveButtons_;
    let btn_:Button;
    if(bntObj instanceof Button){
      btn_=bntObj;
    }

    let addNewToggle_:boolean=false;
    btn_.disabled_=false;

    console.log(["CheckAnswerAmount bntObj, btn_: ",btn_]);
    console.log(["ModelContainer.nodeToEdit: ",ModelContainer.nodeToEdit instanceof QuizItem,ModelContainer.nodeToEdit]);
    //If current qdditing node - Question => check button state

    if(ModelContainer.nodeToEdit !=null){
      if(ModelContainer.nodeToEdit instanceof Question){

        let tx=ModelContainer.nodeToEdit.scan("QuestionTypes",ModelContainer.nodeToEdit.itemParameter)
        console.log(["tx: ",tx]);

        btn_.disabled_=false;

        if(tx instanceof HtmlItem){
          if(tx.HtmlSubmittedValue=="Text answer"){


            //if adding new item enable buttons

            if(!isNew_){
              console.log(["!isNew_: "])
              if(ModelContainer.nodeToEdit.collection.array.length<=0){
                console.log(["disabled_: ",btn_,tx])
                btn_.disabled_=true;
              }
            }else{
              console.log(["isNew_: "])
                console.log(["not disabled_: ",btn_,tx])
                btn_.disabled_=false;
            }

            console.log(["not disabled_: ",btn_,tx])

            //disable add new button for question answers if text answer and answers >0

            if(ModelContainer.nodeToEdit.collection.array.length>0)
            {
              addNewToggle_=true;
            }

            //Inform save Questionreceivers about wrong answer amount
            //for TextAnswer type

            if(ModelContainer.nodeToEdit.collection.array.length>1){
              console.log(["disabled_: ",btn_,tx])
              btn_.disabled_=true;

              ModelContainer.questionTypeAlert.emit(Factory_.questionTypeAlert());
            }

          }
        }

      }
    }
    ModelContainer.addNewToggle.emit(addNewToggle_);
    ModelContainer.saveDisabled.emit(btn_.disabled_);
  }

}

export class Factory_{

  node():INodeCollection{
    return new  NodeCollection();
  }

  //Generate only NodeCollection

  //Generate class segregation

  static answersCL(n:number):ICollection_<Answer>{
    var answer:ICollection_<Answer>=new Collection_<Answer>();
    answer.tolog=false;
    for(var i=0;i<n;i++){
      answer.add(new Answer({key_:i,name_:"Answer " +i,value_:"Answer " +i,collection_:null,itemParameter_:null}));
    }
    return answer;
  }
  static questionsCL(n:number){
    var question:ICollection_<Question>=new Collection_<Question>();
    question.tolog=false;
    for(var i=0;i<n;i++){
      question.add(new Question({key_:i,name_:"Question " +i,value_:"Question " +i}));
    }
    return question;
  }
  static quizesCL(n:number){
    var quizes:ICollection_<Quiz>=new Collection_<Quiz>();
    quizes.tolog=false;
    for(var i=0;i<n;i++){
      quizes.add(new Quiz({key_:i,name_:"Quiz " +i,value_:"Quiz " +i,collection_:null,itemParameter_:null}));

    }
    return quizes;
  }

  //Quiz html controls

    //--------------------

      //returns quiz controlls with checkboxes

      static QuizCheckboxes(){
        let r = new Collection_<HtmlItem>();

        let cssClass_="fxvt";

        r= new Collection_<HtmlItem>([
          new CheckBoxControl(0,"Anonimous","Is question anonimous?",true,true,cssClass_)
          ,new CheckBoxControl(1,"QuizStat","Show quiz statistics?",true,true,cssClass_)
          ,new CheckBoxControl(2,"ListItem","Place questions on list?",false,true,cssClass_)
          ,new CheckBoxControl(4,"Replayable","Can quiz be replayed?",true,true,cssClass_)
          ])

        return r;
      }

      static QuizStartDate(){
        let r = new Collection_<HtmlItem>();

        r= new Collection_<HtmlItem>([
          new DatePickerControl(0,"StartDate","Choose quiz start date",new Date(),true,"fxhr")
        ])

        return r;

      }

      static QuizCicleCheckbox(){
        let r = new Collection_<HtmlItem>();

        r= new Collection_<HtmlItem>([
          new CheckBoxControl(0,"Cicle","Does quiz need to be cicled?",false,false,"")
        ])

        return r;

      }

      //returns quiz controlls with numbercontrols

      static QuizNumberControls(){
        return new Collection_<HtmlItem>([
          new NumberPickerControl(0,"YearGap","Years gap",0,0,null,true,"fxvt")
          ,new NumberPickerControl(1,"MonthsGap","Months gap",0,0,null,true,"fxvt")
          ,new NumberPickerControl(2,"DaysGap","Days gap",0,0,null,true,"fxvt")
          ,new NumberPickerControl(3,"HoursGap","Hours gap",0,0,null,true,"fxvt")
          ,new NumberPickerControl(4,"MinutesGap","Minutes gap",0,0,null,true,"fxvt")
        ]);
      }

      //claendar collections

      static MonthsInYear(){
        let r = new Collection_<HtmlItem>();
        for(let i=0;i<12;i++){
          r.add(new HtmlItem(0,"months",i+1+"","option","",null,true,null,null))
        }
        return r;
      }
      static WeeksInYear(){
        let r = new Collection_<HtmlItem>();
        for(let i=0;i<52;i++){
          r.add(new HtmlItem(0,"weeks",i+1+"","option","",null,true,null,null))
        }
        return r;
      }
      static DaysInMonth(){
        let r = new Collection_<HtmlItem>();
        for(let i=0;i<31;i++){
          // r.add(new HtmlItem(0,"days",i+1+"","option","",null,true,null,null))
          r.add(new CheckBoxControl(i,"days","day " + String(i+1),false,true,"fxhr"))
        }
        return r;
      }
      static DaysInWeek(){
        let r = new Collection_<HtmlItem>();
        for(let i=0;i<7;i++){
          r.add(new HtmlItem(0,"days",i+1+"","option","",null,true,null,null))
        }
        return r;
      }

      //Quiz controll for dropdowns

      static CalendarDropDowns(){
        let r = new Collection_<HtmlItem>();

          r.add(new DropDownControlNg(0,"MonthInYear","MonthInYear","Month",true,"fxvt"
          ,Factory_.MonthsInYear()))

          r.add(new DropDownControlMultiNg(0,"WeeksInYear","WeeksInYear","Weeks",true,"fxvt"
          ,Factory_.WeeksInYear()))

          r.add(new DropDownControlMulti(0,"DaysInMonth","DaysInMonth","Days",true,"fxvt"
          ,Factory_.DaysInMonth()))

          r.add(new DropDownControlMulti(0,"DaysInWeek","DaysInWeek","Days",true,"fxvt"
          ,Factory_.DaysInWeek()))

        return r;
      }

      static QuizControlsGen(){

        let checkboxes=new HtmlItem(0,"Checkboxes","Select Quiz parameters","","","Select Quiz parameters",true,"fxhr"
          , Factory_.QuizCheckboxes()
          );

        let startDate=new HtmlItem(1,"QuizStartDate","Select Quiz start date","","","Select Quiz start date",true,"fxhr"
          , Factory_.QuizStartDate()
          );

        let circleCheck=new HtmlItem(2,"QuizCircle","Does quiz cicled?","","","Does quiz cicled?",true,"fxhr"
          , Factory_.QuizCicleCheckbox()
          );

        let numbercontrols=new HtmlItem(3,"DateGap","Choose quiz restart period","","","Choose quiz restart period",true,"fxhr"
          , Factory_.QuizNumberControls()
        );

        let calendarcontrols=new HtmlItem(4,"CalendarControls","Choose quiz calendar period","","","Choose quiz calendar period",true,"fxhr"
          , Factory_.CalendarDropDowns()
        );

        let q=new Collection_<HtmlItem>(

            // [tbColl,dtColl,rbColl,nbColl]

            [checkboxes,startDate,circleCheck,numbercontrols,calendarcontrols]

          );

        return q;
      }

    //--------------------


    //Question html controls

    //--------------------


    //Question answer types drop box values

    static QuestionTypes(){
      let q:Collection_<HtmlItem>=null;

        q=new Collection_<HtmlItem>([
          new HtmlItem(0,"TextControl","Text answer","","","Text answer",true,"fxhr",null)
          ,new HtmlItem(1,"CheckBoxControl","Select any answers","","","Text answer",true,"fxhr",null)
          ,new HtmlItem(2,"RadioButtonControl","Select one answer","","","Text answer",true,"fxhr",null)
          ,new HtmlItem(3,"DropDownControlMulti","Rating answer","","","Text answer",true,"fxhr",null)
        ]);

      return q;
    }



    //Question text controll

    static QuestionTextControl(){
      let q:Collection_<HtmlItem>=null;
      q=new Collection_<HtmlItem>([
        new TextControl(0,"QuestionTextControl","Question text: ","enter text here",null,null,null,null,true,"fxvt")
      ]);
      return q;
    }

    //Dropdown control for answer types

    static QuestionTypeControl(){
      let q:Collection_<HtmlItem>=null;
        q=new Collection_<HtmlItem>([
          new DropDownControlNg(1,"QuestionTypes","Select answers type for question","Answer type",true,"fxvt"
          ,Factory_.QuestionTypes())
        ])
      return q;
    }

    //Answer text controll

    static AnswerTextControl(){
      let q=new Collection_<HtmlItem>([
        new TextControl(0,"AnswerTextControl","Answer text: ","enter text here",null,null,null,null,true,"fxvt")
      ]);
      return q;
    }

    //Generates controlls for Question

    static QuestionControlsGen(){
      let q:Collection_<HtmlItem>=null;

      let txtCtrl=new HtmlItem(0,"QuestionTextContainer","","","","",true,"fxhr",
        Factory_.QuestionTextControl());

      let tpCtrl=new HtmlItem(0,"DropBoxControl","Select question answer type","","","Select question answer type",true,"fxhr",
        Factory_.QuestionTypeControl());

      q=new Collection_<HtmlItem>([
        txtCtrl,tpCtrl
      ]);

      return q;
    }

    static AnswerControlsGen(){
      let q:Collection_<HtmlItem>=null;

      let txtCtrl=new HtmlItem(0,"AnswerTextContainer","","","","",true,"fxhr",
        Factory_.AnswerTextControl());

      q=new Collection_<HtmlItem>([
        txtCtrl
      ]);

      return q;
    }

    //--------------------

    //Buttons

    static saveButton(){
      let q=new Button(null,"Save_","Save",null,"btn btn-darkgreen",false,"Save currently edited object");
      //q.disabled_=true;
      return q
    }

    static saveNewButton(){
      let q=new Button(null,"SaveNew_","Save",null,"btn btn-darkgreen",false,"Save currently created object");
      return q;
    }

    static addButton(){
      let q=new Button(null,"Add_","Add new",null,"btn btn-purple-gradient",false,null);
      return q;
    }

    static editButton(){
      let q=new Button(null,"Edit_","Edit",null,"btn btn-purple",false,"Edit ");
      return q;
    }

    static deleteButton(){
      let q=new Button(null,"Delete_","Delete",null,"btn btn-unique",false,"Delete ");
      return q;
    }

    static copyButton(){
      let q=new Button(null,"Cpoy_","Copy",null,"btn btn-unique",false,"Copy ");
      return q;
    }

    static itemButtons(){
      return new Button(0,"ItemCollection","ItemCollection",
        new Collection_<Button>([
          new Button(null,"Edit_","Edit",null,"btn btn-purple",false,"Edit ")
          ,new Button(null,"Copy_","Copy",null,"btn btn-warning",false,"Copy ")
          ,new Button(null,"Delete_","Delete",null,"btn btn-danger",false,"Delete ")
        ])
        ,"fvhr",false,"")
    }

    //--------------------

    //Alerts

    //--------------------

    static questionTypeAlert(){
      return "Wrong qnswers count for this type. Only 1 allowed.";
    }

    static CloneItemByClass(n_:NodeCollection){
      let r_:any=null;

      if(n_ instanceof HtmlItem){
        r_=new HtmlItem(n_._key,n_._name,n_._value,n_.HtmlClass,n_.HtmlTypeAttr
        ,n_.HtmlSubmittedValue,n_.show,n_.cssClass,n_.collection);
      }
      if(n_ instanceof QuizControls){
        r_=new QuizControls({cssClass_:n_.cssClass,show_:n_.show,collection_:new Collection_<HtmlItem>()});
      }
      if(n_ instanceof QuizItem){
        r_=new QuizItem({key_:n_._key,name_:n_._name,value_:n_._value,collection_:new Collection_<QuizItem>()})
      }
      if(n_ instanceof Quiz){
        r_=new Quiz({key_:n_._key,name_:n_._name,value_:n_._value,collection_:new Collection_<Question>(),itemParameter_:new QuizControls()})
      }
      if(n_ instanceof Question){
        r_=new Question({key_:n_._key,name_:n_._name,value_:n_._value,collection_:new Collection_<Answer>()
          ,itemParameter_:new QuestionControls()})
      }
      if(n_ instanceof Answer){
        r_=new Answer({key_:n_._key,name_:n_._name,value_:n_._value,collection_:null,itemParameter_:new AnswerControls()})
      }

      return r_;
    }

    static _Clone(n_:NodeCollection){
        let r=Factory_.CloneItemByClass(n_);
        let num=-1;
          r=Factory_._deepClone(n_,r,num);
        return r;
      }
    static _deepClone(from_:NodeCollection,to_:NodeCollection,num_:number){

        num_+=1;
        let temp_=new NodeCollection();

            if(from_._hasCollection()){
            // console.log(["Parent create from,to:",from_,to_,num_]);

              if(from_._hasArray()){

              //has children

                for(let n_ of from_.collection.array){
                //console.log(["Collection loop:item,of",n_,from_]);

                  if(n_ instanceof QuizItem){
                    //console.log(["Pushed to parent from,to:",from_,to_]);

                    temp_=Factory_.CloneItemByClass(n_);
                    Factory_._deepClone(n_,temp_,num_);
                  }

                  to_.collection.array.push(temp_);

                }

              }else{
                //head element

                to_=Factory_.CloneItemByClass(from_);
              }

            }

            num_-=1;
            // console.log(["Return :",to_,to_._key]);
            return to_;
          }
    static DeepClone(obj_:any){
      let  r_ = Object.assign(
					Object.create(
					  Object.getPrototypeOf(obj_)
					)  ,obj_
				  );
				  return r_;
    }

}


export class Test{

    //genes html items

    public static HtmlItems(){

      let qzcl = new Collection_<HtmlItem>();
      let tbColl = new HtmlItem(0,"Textboxes","Text box n radios","","","",true,"fxhr"
        ,new Collection_<HtmlItem>([
          new TextControl(0,"Tb","text_nm","Type text","Type here",null,2,4,true,"fxvt")
          ,new TextControl(0,"Tb","text_nm","Type text2","Type here2",null,1,3,true,"fxhr")
          ,new CheckBoxControl(0,"Cb","To Check or not to check",true,true,"fxvt")
          ,new CheckBoxControl(0,"Cb","To Check or not to check2",false,true,"fxhr")
          ])
        );

      let dtColl = new HtmlItem(0,"DatePicker","DatePicker","","","",true,"fxvt"
        ,new Collection_<HtmlItem>([
          new DatePickerControl(0,"Dp","Choose date",new Date(2001,11,11,11,11,1),true,"fxvt")
          ,new DatePickerControl(0,"Dp","Choose date",new Date(2002,11,11,11,11,1),true,"fxhr")
        ])
      );

      let rbColl = new HtmlItem(0,"Radio","Radio","","","",true,"fxvt"
        ,new Collection_<HtmlItem>(
          [    new RadioButtonControl(0,"Rb1","Choose or not to choose?1","Choice 2",true,"fxvt"
                ,new Collection_<HtmlItem>([
                  new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                  ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                  ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                  ]))
              ,new RadioButtonControl(0,"Rb2","Choose or not to choose?2","Choice_3",true,"fxhr"
                ,new Collection_<HtmlItem>([
                  new HtmlItem(0,"Rb2","Choice_1","option","",null,true,null,null)
                  ,new HtmlItem(1,"Rb2","Choice_2","option","",null,true,null,null)
                  ,new HtmlItem(2,"Rb2","Choice_3","option","",null,true,null,null)
                  ]))
                ]
        ));

      let nbColl = new HtmlItem(0,"NumPicker","NumPicker","","","",true,"fxhr"
        ,new Collection_<HtmlItem>([
          new NumberPickerControl(0,"Npc","Select number 1",3,1,5,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",7,8,9,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",3,2,4,true,"fxvt")
        ]));

      let nb2Coll = new HtmlItem(0,"NumPicker","NumPicker","","","",true,"fxvt"
        ,new Collection_<HtmlItem>([
          new NumberPickerControl(0,"Npc","Select number 1",3,1,5,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",8,7,9,true,"fxvt")

        ]));

        let ddCollVt = new HtmlItem(0,"DropDown","DropDown","","","",true,"fxvt"
          ,new Collection_<HtmlItem>(
            [    new DropDownControlNg(0,"Dd1","Choose again header","Choose again",true,"fxvt"
                  ,new Collection_<HtmlItem>([
                    new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                    ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                    ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                    ]))
                ,new DropDownControlNg(0,"Dd1","And again heder","And again",true,"fxvt"
                      ,new Collection_<HtmlItem>([
                        new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                        ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                        ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                        ]))
                  ]
          ));

          let ddCollHr = new HtmlItem(0,"DropDown","DropDown","","","",true,"fxhr"
            ,new Collection_<HtmlItem>(
              [    new DropDownControlNg(0,"Dd1","Choose again header","Choose again",true,"fxvt"
                    ,new Collection_<HtmlItem>([
                      new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                      ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                      ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                      ]))
                  ,new DropDownControlNg(0,"Dd1","And again heder","And again",true,"fxvt"
                        ,new Collection_<HtmlItem>([
                          new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                          ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                          ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                          ]))
                    ]
            ));

      qzcl=new Collection_<HtmlItem>(

        // [tbColl,dtColl,rbColl,nbColl]

        [ddCollVt,ddCollHr,tbColl,dtColl,rbColl,nbColl]

      );

      // qzcl=new Collection_<HtmlItem>([dbcl]);

      qzcl.setType("HtmlItem");

      let htmlItemsArr3=new HtmlItem(0,"HtmlColl","HtmlColl","","","",true,"fxvt"
        ,qzcl);

      return htmlItemsArr3;
    }

    //gens html items for quiz -> moove to optiondefault

    public static QuizHtml(){

      let qzcl = new Collection_<HtmlItem>();
      let tbColl = new HtmlItem(0,"Textboxes","Text box n radios","","","",true,"fxhr"
        ,new Collection_<HtmlItem>([
          new TextControl(0,"Tb","text_nm","Type text","Type here",null,2,4,true,"fxvt")
          ,new TextControl(0,"Tb","text_nm","Type text2","Type here2",null,1,3,true,"fxhr")
          ,new CheckBoxControl(0,"Cb","To Check or not to check",true,true,"fxvt")
          ,new CheckBoxControl(0,"Cb","To Check or not to check2",false,true,"fxhr")
          ])
        );

      let dtColl = new HtmlItem(0,"DatePicker","DatePicker","","","",true,"fxvt"
        ,new Collection_<HtmlItem>([
          new DatePickerControl(0,"Dp","Choose date",new Date(2001,11,11,11,11,1),true,"fxvt")
          ,new DatePickerControl(0,"Dp","Choose date",new Date(2002,11,11,11,11,1),true,"fxhr")
        ])
      );

      let rbColl = new HtmlItem(0,"Radio","Radio","","","",true,"fxvt"
        ,new Collection_<HtmlItem>(
          [    new RadioButtonControl(0,"Rb1","Choose or not to choose?1","Choice 2",true,"fxvt"
                ,new Collection_<HtmlItem>([
                  new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                  ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                  ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                  ]))
              ,new RadioButtonControl(0,"Rb2","Choose or not to choose?2","Choice_3",true,"fxhr"
                ,new Collection_<HtmlItem>([
                  new HtmlItem(0,"Rb2","Choice_1","option","",null,true,null,null)
                  ,new HtmlItem(1,"Rb2","Choice_2","option","",null,true,null,null)
                  ,new HtmlItem(2,"Rb2","Choice_3","option","",null,true,null,null)
                  ]))
                ]
        ));

      let nbColl = new HtmlItem(0,"NumPicker","NumPicker","","","",true,"fxhr"
        ,new Collection_<HtmlItem>([
          new NumberPickerControl(0,"Npc","Select number 1",3,1,5,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",7,8,9,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",3,2,4,true,"fxvt")
        ]));

      let nb2Coll = new HtmlItem(0,"NumPicker","NumPicker","","","",true,"fxvt"
        ,new Collection_<HtmlItem>([
          new NumberPickerControl(0,"Npc","Select number 1",3,1,5,true,"fxvt")
          ,new NumberPickerControl(0,"Npc","Select number 2",8,7,9,true,"fxvt")

        ]));

        let ddCollVt = new HtmlItem(0,"DropDown","DropDown","","","",true,"fxvt"
          ,new Collection_<HtmlItem>(
            [    new DropDownControlNg(0,"Dd1","Choose again header","Choose again",true,"fxvt"
                  ,new Collection_<HtmlItem>([
                    new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                    ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                    ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                    ]))
                ,new DropDownControlNg(0,"Dd1","And again heder","And again",true,"fxvt"
                      ,new Collection_<HtmlItem>([
                        new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                        ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                        ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                        ]))
                  ]
          ));

          let ddCollHr = new HtmlItem(0,"DropDown","DropDown","","","",true,"fxhr"
            ,new Collection_<HtmlItem>(
              [    new DropDownControlNg(0,"Dd1","Choose again header","Choose again",true,"fxvt"
                    ,new Collection_<HtmlItem>([
                      new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                      ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                      ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                      ]))
                  ,new DropDownControlNg(0,"Dd1","And again heder","And again",true,"fxvt"
                        ,new Collection_<HtmlItem>([
                          new HtmlItem(0,"Rb1","Choice 1","option","",null,true,null,null)
                          ,new HtmlItem(1,"Rb1","Choice 2","option","",null,true,null,null)
                          ,new HtmlItem(2,"Rb1","Choice 3","option","",null,true,null,null)
                          ]))
                    ]
            ));

      qzcl=new Collection_<HtmlItem>(
          // [tbColl,dtColl,rbColl,nbColl]
          [ddCollVt,ddCollHr,tbColl,dtColl,rbColl,nbColl,]
        );
      // qzcl=new Collection_<HtmlItem>([dbcl]);

      qzcl.setType("HtmlItem");

      let htmlItemsArr3=new HtmlItem(0,"HtmlColl","HtmlColl","","","",true,"fxvt"
        ,qzcl);

      return htmlItemsArr3;
    }

    //Generates NodeCollection from classes

    public static GenClasses(bol_:boolean,lw_?:number,up_?:number)
    :INodeCollection {

      var col_:INodeCollection=new NodeCollection()

      var lw:number;
      var up:number;

      if(bol_!=null){
        var factory:Factory_=new Factory_();

        if(lw_!=null) {lw=lw_;
        }else{
          lw=Math.floor(Math.random()*10)+1;
        }
        if(up_!=null){up=up_;
        }else{
          up=Math.floor(Math.random()*10)+lw;
        }


        var gn_:number=Math.floor(Math.random()*up)+lw;
        if(bol_){
          ServiceCl.log(["Gen value: ",gn_]);
        }

        col_.collection=Factory_.quizesCL(gn_);
        col_.typeName="Quiz";

        /*
        Factory_.quizesCL(gn_)
        Factory_.questionsCL(gn_)
        Factory_.answersCL(gn_)
        */

        for(var qt_ of col_.collection.array)
        {
          gn_=Math.floor(Math.random()*up)+lw;
          qt_.collection=Factory_.questionsCL(gn_);
          qt_.typeName="Question"
          for(var aw_ of qt_.collection.array)
          {
            gn_=Math.floor(Math.random()*up)+lw;
            aw_.collection=Factory_.answersCL(gn_);
            aw_.typeName="Answer"
          }
        }

        if(bol_){
          ServiceCl.log(["Gen borders: ",lw,up]);
          ServiceCl.log(["Quizes genned: ",col_]);
        }
        return col_;
      }

    }

    public static CheckNullArr(){

      //collection null

      let ncCn=new NodeCollection(null,null,null,null);

      //array null

      let ncAn=new NodeCollection(null,null,null,new Collection_<NodeCollection>());

      //no nulls

      let ncNN=new NodeCollection(null,null,null,new Collection_<NodeCollection>([new NodeCollection()]));

      Test.checkNull("ncCn",ncCn);
      Test.checkNull("ncAn",ncAn);
      Test.checkNull("ncNN",ncNN);

      Test.checkNull2("ncCn",ncCn);
      Test.checkNull2("ncAn",ncAn);
      Test.checkNull2("ncNN",ncNN);

    }
    public static checkNull(name:string,ns:NodeCollection){

      if(ns.collection!=null){
        console.log([name,"ns.collection!=null",ns])
        if(ns.collection.array!=null){
          console.log([name,"ns.collection.array!=null",ns])
          if(ns.collection.array.length>0){
            console.log([name,"ns.collection.array.length>0",ns])
          }
        }
      }

    }
    public static checkNull2(name:string,ns:NodeCollection){

      if(
        (ns.collection!=null)
        && (ns.collection.array!=null)
        && (ns.collection.array.length>0)
      ){
        console.log([name,"ns.collection.array.length>0",ns])
      }

    }

    public static CheckDeepCopyClasses(){

      let qz_0=new QuizItem({key_:0,name_:"qz00",value_:"qz00",collection_:new Collection_<Quiz>(
        [
          new Quiz({key_:1,name_:"qz01",value_:"qz01",collection_:
            new Collection_<Question>(
              [
                new Question({key_:3,name_:"qz03",value_:"qz03",collection_:null})
                ,new Question({key_:4,name_:"qz04",value_:"qz04",collection_:null})
                ,new Question({key_:5,name_:"qz05",value_:"qz05",collection_:null})
              ]
            ),itemParameter_:new QuizControls()
        })
          ,new Quiz({key_:2,name_:"qz02",value_:"qz02",collection_:
            new Collection_<Question>(
              [
                new Question({key_:6,name_:"qz06",value_:"qz06",collection_:null})
                ,new Question({key_:7,name_:"qz07",value_:"qz07",collection_:null})
              ]
            )
        })
        ]
      )
      });

      let qz_1=new QuizItem({key_:0,name_:"qz10",value_:"qz10",collection_:null});

      qz_1=Factory_._Clone(qz_0);

      qz_0.collection.array[0]._name="changedName"

      //ItemPrameterss change
        let ip_0=null;
        let qz_ch=qz_0.collection.array[0];
        // console.log(["qz_ch",qz_ch])
        if(qz_ch instanceof Quiz){
          // console.log(["1",qz_ch])
          ip_0=qz_ch.scanParameters("QuizStat");
          if(ip_0 instanceof HtmlItem){
            ip_0.show=false;
          }
        }

      //ItemPrameterss change

        let qz_ch_1=qz_1.collection.array[0];
        // console.log(["qz_ch",qz_ch])
        if(qz_ch_1 instanceof Quiz){
          // console.log(["1",qz_ch])
          let ip_1=qz_ch_1.scanParameters("QuizStat");
          if(ip_1 instanceof HtmlItem){
            console.log(["ItemParmeters, from, to : ",ip_0,ip_1]);
          }
        }

      console.log(["CheckDeepCopy: ",qz_0,qz_1]);
    }

    public static CheckInstanceOfDeriveredClasses(){

        let qz = new Quiz();
        let qt = new Question();
        let aw = new Answer();

        console.log(["qz instanceof Quiz: ",qz instanceof Quiz])
        console.log(["qz instanceof QuizItem: ",qz instanceof QuizItem])
        console.log(["qt instanceof Question: ",qt instanceof Question])
    }

    public static CheckDeepCopyVanilaJS(){
      let qz_0=new QuizItem({key_:0,name_:"qz00",value_:"qz00",collection_:new Collection_<Quiz>(
        [
          new Quiz({key_:1,name_:"qz01",value_:"qz01",collection_:
            new Collection_<Question>(
              [
                new Question({key_:3,name_:"qz03",value_:"qz03",collection_:null})
                ,new Question({key_:4,name_:"qz04",value_:"qz04",collection_:null})
                ,new Question({key_:5,name_:"qz05",value_:"qz05",collection_:null})
              ]
            ),itemParameter_:new QuizControls()
        })
          ,new Quiz({key_:2,name_:"qz02",value_:"qz02",collection_:
            new Collection_<Question>(
              [
                new Question({key_:6,name_:"qz06",value_:"qz06",collection_:null})
                ,new Question({key_:7,name_:"qz07",value_:"qz07",collection_:null})
              ]
            )
        })
        ]
      )
      });

      let  qz_1 =Factory_.DeepClone(qz_0);
      qz_0.collection.array[0]._name="Changed";
      console.log(["JSON CheckDeepCopyVanilaJS:",qz_1]);
    }

    public static GO(){

      //Test.GenNewColl(false);
      //Test.Gen(false,1,3);
      //Test.GenClasses(true,1,3);


      //test of shallow copy

      //Test.CheckshallowCopy();


      //DeepCopy check

      //this.CheckDeepCopy();

      //Deepcopy class
      this.CheckDeepCopyClasses();

      //deep copy with recursive parameters copy
      // this.CheckDeepCopyRecursive();

      //Inheritance check

      //this.CheckInstanceOfDeriveredClasses()


      //check deep cloning of objects

      //this.CheckDeepCopyVanilaJS();

      //ModelContainer.Init();



      //JSON first Quiz
      //console.info(JSON.stringify(ModelContainer.nodesPassed_.collection.array[0]));

      //console.info(JSON.stringify(ModelContainer.nodesPassed_));


      ServiceCl.log(["GO " ]);
    }

}
