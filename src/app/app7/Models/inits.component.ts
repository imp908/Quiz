import {ServiceCl} from '../Services/services.component';
import { EventEmitter,Output } from '@angular/core';
//TS Collections
//npm install typescript-collections [-g] --save
import * as Collections from 'typescript-collections';

import {INode,ICollection_,INodeCollection} from './POCO.component';


//option constructors

class NodeG implements INode{
  key:number;
  name:string;
  value:string;
  constructor(options:{key_:number,name_:string, value_:string}={key_:0,name_ : "",value_:""})
  {
    this.key=options.key_;
    this.name=options.name_;
    this.value=options.value_;
  }
}

class CollectionG_<T extends NodeG> implements ICollection_<T>{
  array:Array<T>;
  tolog:boolean;
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

      if(item.key==null){
          max+=1;
          toPsuh=true;
          ServiceCl.log(["item has no key. Max=  ",max])
      }else{
        ServiceCl.log(["item has key: ",item.key])

        if((this.getByItem(item)==null)){
          max+=1;
          toPsuh=true;
          ServiceCl.log(["item not exists. max= ",max])
        }

      }

    }

    if(toPsuh===true){
      item.key=max;
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
      var index_=this.array.findIndex(s=>s.key===item.key);
      if(index_!=-1){
          this.array[-1]=item;
          return this.array[-1];
      }
    }
    return null;
  }

  addUpdate(item:T){
    if((typeof(this.array)!=null)){
      var index_=this.array.findIndex(s=>s.key===item.key);
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
      var max=Math.max.apply(Math,this.array.map(function(o){return o.key;}))
      if(max!=null){
        return max;
      }
    }
    return null;
  }
  getByItem(item:T){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s.key===item.key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getByKey(key:number){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s.key===key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getIndexByItem(item:T){
    if(typeof(this.array)!=null){
      return this.array.findIndex(s=>s.key===item.key);
    }
    return -1;
  }
  getIndexBykey(key:number){
      if(typeof(this.array)!=null){
        return this.array.findIndex(s=>s.key===key);
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

}

//parameter constructions

class Node implements INode{
  key:number;
  name:string;
  value:string;

  static _key:number;

  constructor(key_?:number,name_?:string, value_?:string)
  {
    if(key_!=null){Node._key=key_;}else{
      if(Node._key!=null){Node._key+1;}else{Node._key=0;}
    }
    if(name_!=null){this.name=name_;}
    if(value_!=null){this.value=value_;}
  }
}
class Collection_<T extends Node> implements ICollection_<T>{
  array:Array<T>=new Array<T>();
  tolog:boolean=false;

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

    if(item.key==null){

      //tolog
      if(this.tolog){ServiceCl.log(["Item key is null"])}

      if(max!=-1){

        //tolog
        if(this.tolog){ServiceCl.log(["array contains some elements"])}

        max+=1;
        item.key=max;
        toPsuh=true;
      }else{
        //tolog
        if(this.tolog){ServiceCl.log(["array contains no elements"])}
        item.key=0;
        toPsuh=true;
      }

    }else{

      //tolog
      if(this.tolog){ServiceCl.log(["Item key is: ",item.key])}

      if(max!=-1){
        //tolog
        if(this.tolog){ServiceCl.log(["Array not empty"])}

          if((this.getByItem(item)!=null)){
            //tolog
            if(this.tolog){ServiceCl.log(["Array contains item: ",item])}

            max+=1;
            item.key=max;
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
        var index_=this.array.findIndex(s=>s.key===item.key);
        if(index_!=-1){
          //log
          if(this.tolog){ServiceCl.log(["Array contains item",item])}
            this.array[item.key]=item;
        }
      }
    }

    return this.array;
  }

  addUpdate(item:T){
    if((typeof(this.array)!=null)){
      var index_=this.array.findIndex(s=>s.key===item.key);
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
      var max=Math.max.apply(Math,this.array.map(function(o){return o.key;}))
      if(!isFinite(max)){
        ServiceCl.log("Max infinite")
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
      var index_=this.array.findIndex(s=>s.key===item.key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getByKey(key:number){
    if(typeof(this.array)!=null){
      var index_=this.array.findIndex(s=>s.key===key);
      if(index_!=-1){
        return this.array[index_];
      }
    }
    return null;
  }
  getIndexByItem(item:T){
    if(typeof(this.array)!=null){
      return this.array.findIndex(s=>s.key===item.key);
    }
    return -1;
  }
  getIndexBykey(key:number){
      if(typeof(this.array)!=null){
        return this.array.findIndex(s=>s.key===key);
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


}
export class NodeCollection extends Node{

  key:number=0;
  name:string;
  value:string;

  parentKey:number;

  collection:ICollection_<INodeCollection>;
  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>)
  {
    super(key_,name_,value_);
    if(collection_!=null){this.collection=collection_;}
    if(collection_===undefined){this.collection=new Collection_<NodeCollection>();}
    if(collection_===null){this.collection=null;}
  }

}

export class Quiz extends NodeCollection{}
export class Question extends NodeCollection{}
export class Answer extends NodeCollection{}

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
  displayText:string;
  htmlClass:string;
  clicked:boolean;

  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,htmlClass_?:string,clicked_?:boolean){
    super(key_,name_,value_,collection_);
    this.htmlClass="";
    if(htmlClass_!=null){
      this.htmlClass=htmlClass_;
    }
    this.clicked=false;
    if(clicked_!=null){
      this.clicked=clicked_;
    }
  }

}
export class itemButtons extends Button{

  constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
    ,displayText_?:string,htmlClass_?:string,clicked_?:boolean){
      super(key_,name_,value_,collection_,htmlClass_,clicked_);

      this.collection.add(new Button(null,"Edit_","Edit",null,"btn btn-primary",false))
      this.collection.add(new Button(null,"Delete_","Delete",null,"btn btn-danger",false))

    }
}
export class menuButtons extends Button{

    constructor(key_?:number,name_?:string, value_?:string,collection_?:ICollection_<INodeCollection>
      ,displayText_?:string,htmlClass_?:string,clicked_?:boolean){
      super(key_,name_,value_,collection_,htmlClass_,clicked_);
      this.collection.add(new Button(null,"Add_","Add new",null,"btn btn-outline-primary",false))
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
  @Output() static nodeSaved=new EventEmitter();

  static nodeMethodCall(b_:Button,n_:NodeCollection){
    ServiceCl.log(["nodeMethodCall",b_,n_]);
    if(b_.name=="Edit_"){
      ServiceCl.log("Edit_");
      ModelContainer.nodeSelect(n_);
    }
    if(b_.name=="Add_"){
      ServiceCl.log("Add_");
    }
    if(b_.name=="Delete_"){
      ServiceCl.log("Delete_");
    }
  }
  static classDetect(n_:NodeCollection){
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

  static nodeSave(n_:NodeCollection){
    ServiceCl.log(["nodeSave",n_,ModelContainer]);
    if(n_ instanceof Answer)
    {
        let quizEditable:NodeCollection=ModelContainer.nodesPassed_.collection.getByItem(ModelContainer.QuizToEdit);
        let questionEditable:NodeCollection=quizEditable.collection.getByItem(ModelContainer.QuestionToEdit);
        let answerEditable:NodeCollection=questionEditable.collection.getByItem(ModelContainer.AnswerToEdit);
        answerEditable=n_;
        ServiceCl.log(["Answer",ModelContainer]);
    }
    if(n_ instanceof Question)
    {
        ServiceCl.log(["Question"]);
    }
    if(n_ instanceof Quiz)
    {
        ServiceCl.log(["Quiz"]);
    }
    ModelContainer.nodeSaved.emit();
  }
  static nodeSelect(n_:NodeCollection){
    ModelContainer.nodeToEdit=n_;

    ModelContainer.classDetect(n_);

    ModelContainer.nodeEmitted.emit();
    ServiceCl.log(["ModelContainer:",ModelContainer]);
  }
  static nodeDelete(n_:NodeCollection){

  }

}

export class Factory_{

  node():INodeCollection{
    return new  NodeCollection();
  }

  //Generate only NodeCollection

  answers(n:number):ICollection_<NodeCollection>{
    var answer:ICollection_<NodeCollection>=new Collection_<NodeCollection>();
    answer.tolog=false;
    for(var i=0;i<n;i++){
      answer.add(new NodeCollection(i,"Answer " +i,"Answer " +i));
    }
    return answer;
  }
  questions(n:number){
    var question:ICollection_<NodeCollection>=new Collection_<NodeCollection>();
    question.tolog=false;
    for(var i=0;i<n;i++){
      question.add(new NodeCollection(i,"Question " +i,"Question " +i));
    }
    return question;
  }
  quizes(n:number){
    var quizes:ICollection_<NodeCollection>=new Collection_<NodeCollection>();
    quizes.tolog=false;
    for(var i=0;i<n;i++){
      quizes.add(new NodeCollection(i,"Quiz " +i,"Quiz " +i));
    }
    return quizes;
  }

  //Generate class segregation

  static answersCL(n:number):ICollection_<Answer>{
    var answer:ICollection_<Answer>=new Collection_<Answer>();
    answer.tolog=false;
    for(var i=0;i<n;i++){
      answer.add(new Answer(i,"Answer " +i,"Answer " +i));
    }
    return answer;
  }
  static questionsCL(n:number){
    var question:ICollection_<Question>=new Collection_<Question>();
    question.tolog=false;
    for(var i=0;i<n;i++){
      question.add(new Question(i,"Question " +i,"Question " +i));
    }
    return question;
  }
  static quizesCL(n:number){
    var quizes:ICollection_<Quiz>=new Collection_<Quiz>();
    quizes.tolog=false;
    for(var i=0;i<n;i++){
      quizes.add(new Quiz(i,"Quiz " +i,"Quiz " +i));
    }
    return quizes;
  }

}

export class Test{

    //NEW

    public static GenNewColl(bol_:boolean){

      if(bol_==true ){
        var factory:Factory_=new Factory_();

        ServiceCl.log(["New answer: ",new NodeCollection(11,"Answer "+11,"Answer "+11)])

        ServiceCl.log(["New factory NodeCollection: ",new Factory_().node()])

        ServiceCl.log(["New factory AnswersCollection: ",factory.answers(5)]);

        ServiceCl.log(["New factory QuestionsCollection: ",factory.questions(5)]);

      }

    }

    public static AnswersAddDeleteUpdate(bol_:boolean){
        var answers:ICollection_<NodeCollection> =
        new Collection_<NodeCollection>();
    }

    //Generates NodeCollection array

    public static Gen(bol_:boolean,lw_?:number,up_?:number)
    :ICollection_<INodeCollection> {

      var col_:ICollection_<INodeCollection> =new Collection_<NodeCollection> ();

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
          up=Math.floor(Math.random()*5)+lw;
        }


        var gn_:number=Math.floor(Math.random()*up)+lw;
        ServiceCl.log(["Gen value: ",gn_]);

        col_=factory.quizes(gn_)
        for(var qz_ of col_.array)
        {
          gn_=Math.floor(Math.random()*up)+lw;
          qz_.collection=factory.questions(gn_)

          for(var qt_ of qz_.collection.array){
            gn_=Math.floor(Math.random()*up)+lw;
            qt_.collection=factory.answers(gn_);
          }
        }

        ServiceCl.log(["Gen borders: ",lw,up]);
        ServiceCl.log(["Quizes genned: ",col_]);
        return col_;
      }

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

        /*
        Factory_.quizesCL(gn_)
        Factory_.questionsCL(gn_)
        Factory_.answersCL(gn_)
        */

        for(var qt_ of col_.collection.array)
        {
          gn_=Math.floor(Math.random()*up)+lw;
          qt_.collection=Factory_.questionsCL(gn_);
          for(var aw_ of qt_.collection.array)
          {
            gn_=Math.floor(Math.random()*up)+lw;
            aw_.collection=Factory_.answersCL(gn_);
          }
        }

        if(bol_){
          ServiceCl.log(["Gen borders: ",lw,up]);
          ServiceCl.log(["Quizes genned: ",col_]);
        }
        return col_;
      }

    }

    public static GO(){

      //Test.GenNewColl(false);
      //Test.Gen(false,1,3);

      //Test.GenClasses(true,1,3);

      /*
      //item facory test
      let fct=new Factory();
      ServiceCl.log(["Factory Item: ",fct.createItem()]);
      ServiceCl.log(["Factory ItemG: ",fct.createItemG()]);

      //item anf itemg factory test
      let fctCol=new FactoryCollection();
      let collG:Collection<ItemG>=fctCol.createCollection();
      collG.add(fct.createItemG());
      ServiceCl.log(["Factory CollG: ",collG.array]);

      //itemG collection factory test
      let fctItmColl=new FactoryItemColection();
      ServiceCl.log(["Item: ",new Item()]);
      ServiceCl.log(["ItemG: ",new ItemG()]);
      ServiceCl.log(["ItemCollection: ",new ItemCollection()]);

      ServiceCl.log(new Button(1,"a","b",null,"button1",false));
      */

    }

}
