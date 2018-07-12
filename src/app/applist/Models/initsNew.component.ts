import {ServiceCl} from '../Services/services.component';
import { EventEmitter,Output } from '@angular/core';

//TS Collections
//npm install typescript-collections [-g] --save

// import * as Collections from 'typescript-collections';


import {NodeNew,CollectionNew
  ,HtmlItemNew
  ,QuizItemNew
  ,AnswerNew,QuestionNew,QuizNew
  ,TextControlNew,CheckBoxControlNew
  ,DropDownControlNgNew,DropDownControlMultiNgNew,DropDownControlMultiNew
  ,RadioButtonControlNew
  ,DatePickerControlNew,NumberPickerControlNew
  ,ButtonNew
  ,LabelControlNew
  ,NewAddNew,SaveNew,EditNew,CopyNew,DeleteNew,Cancel
} from './POCOnew.component';


export class FactoryNew{

  static TypeCheck(i_:any){

    if(i_ == null ){return null}

    if(i_ instanceof LabelControlNew){ return "LabelControlNew"}


    if(i_ instanceof QuizNew){ return "QuizNew"}
    if(i_ instanceof AnswerNew){ return "AnswerNew"}
    if(i_ instanceof QuestionNew){ return "QuestionNew"}


    if(i_ instanceof TextControlNew){ return "TextControlNew"}
    if(i_ instanceof CheckBoxControlNew){ return 'CheckBox'}
    if(i_ instanceof DropDownControlNgNew){ return "DropDownControlNgNew"}
    if(i_ instanceof DropDownControlMultiNgNew){ return "DropDownControlMultiNgNew"}
    if(i_ instanceof DropDownControlMultiNew){ return "DropDownControlMultiNew"}
    if(i_ instanceof RadioButtonControlNew){ return "RadioButton"}
    if(i_ instanceof DatePickerControlNew){ return "DatePickerControlNew"}
    if(i_ instanceof NumberPickerControlNew){ return "NumberPickerControlNew"}


    if(i_ instanceof NewAddNew){ return "NewAddNew"}
    if(i_ instanceof SaveNew){ return "SaveNew"}
    if(i_ instanceof EditNew){ return "EditNew"}
    if(i_ instanceof CopyNew){ return "CopyNew"}
    if(i_ instanceof DeleteNew){ return "DeleteNew"}


    if(i_ instanceof ButtonNew){ return "Button"}
    if(i_ instanceof QuizItemNew){ return "QuizItemNew"}
    if(i_ instanceof HtmlItemNew){ return "HtmlItemNew"}

    return null;
  }
  static InstanceCheck(i_:any){
    if(i_ instanceof ButtonNew){return 'Button'}
    if(i_ instanceof QuizItemNew){return 'QuizItem'}
    if(i_ instanceof HtmlItemNew){return 'HtmlItem'}
  }

  //service genes

  static MonthsInYear(){
    let r = new DropDownControlMultiNew({
      key_:0,
      name_:"MonthsInYearDrop",
      value_:"Months in year",
      typeName_:null
      ,array_:null
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
    });

    for(let i=0;i<12;i++){
      r.add(
        new LabelControlNew({
          key_:i,
          name_:"Text control",
          value_:"Month "+(i+1),
          typeName_:null
          ,array_:null
          ,cssClass_:"",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:null
          })
      )
    }
    return r;
  }

  //Quiz object parameters

  static quizItemParametersNewGen(){

    let r = new HtmlItemNew({
      key_:0,
      name_:"Quiz controlls",
      value_:"Quiz controlls",
      typeName_:null
      ,array_:null
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"Quiz controlls"
    });

    let textboxes = new HtmlItemNew({
      key_:0,
      name_:"Quiztexts",
      value_:"Quiztexts",
      typeName_:null
      ,array_:new Array<TextControlNew>(
        new TextControlNew({
          key_:0,
          name_:"ItemName",
          value_:"Enter quiz name",
          typeName_:null
          ,array_:null
          ,cssClass_:"fxhr",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:""
          ,DisplayValue_:""
        })
      )
      ,cssClass_:"fxvt",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:false
    });

    let checkboxes = new HtmlItemNew({
      key_:0,
      name_:"QuizCheckboxControlls",
      value_:"QuizCheckboxControlls",
      typeName_:null
      ,array_:new Array<CheckBoxControlNew>(
        new CheckBoxControlNew({
          key_:2,
          name_:"IsAnonimous",
          value_:"Is question anonimous?",
          typeName_:null
          ,array_:null
          ,cssClass_:"fxhr",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:true
        })
        ,  new CheckBoxControlNew({
            key_:3,
            name_:"QuizStat",
            value_:"Show quiz statistics?",
            typeName_:null
            ,array_:null
            ,cssClass_:"fxhr",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:false
          })
          ,  new CheckBoxControlNew({
              key_:4,
              name_:"ListItem",
              value_:"Place questions on list?",
              typeName_:null
              ,array_:null
              ,cssClass_:"fxhr",show_:true
              ,HtmlTypeAttr_:"div"
              ,HtmlSubmittedValue_:false
            })
            ,  new CheckBoxControlNew({
                key_:5,
                name_:"Replayable",
                value_:"Can quiz be replayed?",
                typeName_:null
                ,array_:null
                ,cssClass_:"fxhr",show_:true
                ,HtmlTypeAttr_:"div"
                ,HtmlSubmittedValue_:false
              })
      )
      ,cssClass_:"fxvt",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:false
    });

    let stardate = new HtmlItemNew({
      key_:1,
      name_:"QuizStartDate",
      value_:"Quiz start date",
      typeName_:null
      ,array_:new Array<DatePickerControlNew>(
        new DatePickerControlNew({
          key_:0,
          name_:"QuizStartDate",
          value_:"Quiz start date",
          typeName_:null
          ,array_:null
          ,cssClass_:"fxhr",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:new Date(2018,1,1)
        }))
      ,cssClass_:"fxhr",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""
    });

    let cycleCheckbox = new HtmlItemNew({
      key_:2,
      name_:"CycleCheckbox",
      value_:"CycleCheckbox",
      typeName_:null
      ,array_: new Array<CheckBoxControlNew>(
        new CheckBoxControlNew({
         key_:0,
         name_:"CycleCheckboxItem",
         value_:"Does quiz need to be cicled?",
         typeName_:null
         ,array_:null
         ,cssClass_:"fxhr",show_:true
         ,HtmlTypeAttr_:"div"
         ,HtmlSubmittedValue_:false
       }))
      ,cssClass_:"fxhr",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""
    });

    let quizNumbers = new HtmlItemNew({
      key_:4,
      name_:"NumberPickerGroup",
      value_:"NumberPickerGroup",
      typeName_:null
      ,array_:new Array<NumberPickerControlNew>(
        new NumberPickerControlNew({
          key_:0,
          name_:"YearGap",
          value_:"Years gap",
          typeName_:null
          ,array_:null
          ,cssClass_:"fxvt",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:0
          ,DisplayValue_:0
          ,minN:0
          ,maxN:9999
        })
        ,new NumberPickerControlNew({
          key_:0,
          name_:"MonthsGap",
          value_:"Months gap",
          typeName_:null
          ,array_:null
          ,cssClass_:"fxvt",show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:0
          ,DisplayValue_:0
          ,minN:0
          ,maxN:9999
        })
      )
      ,cssClass_:"fxhr",show_:false
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""
    });

    let DropBoxes = new HtmlItemNew({
      key_:5,
      name_:"DropBoxesGroup",
      value_:"Time periods",
      typeName_:null
      ,array_:new Array<DropDownControlMultiNew>(
      FactoryNew.MonthsInYear()
      ,new DropDownControlMultiNew({
      key_:1,
      name_:"Weeks in year",
      value_:"Weeks in year",
      typeName_:null
      ,array_:TestNew.LabelControlNewTest(3,"row").array
      ,cssClass_:"",show_:false
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""})
      ,new DropDownControlMultiNew({
      key_:2,
      name_:"Days in week",
      value_:"Days in week",
      typeName_:null
      ,array_:TestNew.LabelControlNewTest(3,"row").array
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""})
      )
      ,cssClass_:"fxhr",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:""
    });


    r.add(textboxes);
    r.add(checkboxes);
    r.add(stardate);
    r.add(cycleCheckbox);
    r.add(quizNumbers);
    r.add(DropBoxes);

    DropBoxes.show=false;
    quizNumbers.show=false;

    r.sort(true);
    return r;
  }
  static questionParametersNewGen(){

    let r = new HtmlItemNew({
      key_:0,
      name_:"Question controlls",
      value_:"Question controlls",
      typeName_:null
      ,array_:null
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"Question controlls"
    });

    let textboxes = new TextControlNew({
      key_:2,
      name_:"Textctrl",
      value_:"Question text",
      typeName_:null
      ,array_:new Array<TextControlNew>(
          new TextControlNew({
            key_:0,
            name_:"ItemName",
            value_:"Enter question text",
            typeName_:null
            ,array_:null
            ,cssClass_:"fxhr",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:""
            ,DisplayValue_:""
          })
        )
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,DisplayValue_:"dsp"
      ,pattern_:null
      ,maxLength_:null
      ,minLength_:null
    });

    let dropboxes = new DropDownControlNgNew({
        key_:0,
        name_:"QuestionTypes",
        value_:"Select answers type for question",
        typeName_:null
        ,array_:new Array<LabelControlNew>(
          new LabelControlNew({
            key_:0,
            name_:"Text answer",
            value_:"Text answer",
            typeName_:null
            ,array_:null
            ,cssClass_:"",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:""
          })
          ,new LabelControlNew({
            key_:1,
            name_:"Select one answer",
            value_:"Select one answer",
            typeName_:null
            ,array_:null
            ,cssClass_:"",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:""

          })
          ,new LabelControlNew({
            key_:2,
            name_:"Select any answer",
            value_:"Select any answer",
            typeName_:null
            ,array_:null
            ,cssClass_:"",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:""

          })
          ,new LabelControlNew({
            key_:3,
            name_:"Rating answer",
            value_:"Rating answer",
            typeName_:null
            ,array_:null
            ,cssClass_:"",show_:true
            ,HtmlTypeAttr_:"div"
            ,HtmlSubmittedValue_:""

          })
        )
        ,cssClass_:"",show_:true
        ,HtmlTypeAttr_:"div"
        ,HtmlSubmittedValue_:"Question type"
      });

    r.add(textboxes)
    r.add(dropboxes)

    return r;
  }

  public static ItemButtons(itmNm:string){
    let r = new HtmlItemNew(null);

      r.addArr([new EditNew({key_:0,
      name_:"Edit "+itmNm,
      value_:"Edit "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-purple",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Edit "+itmNm,disabled_:false})
      ,new CopyNew({key_:0,
      name_:"Copy "+itmNm,
      value_:"Copy "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-unique",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Copy "+itmNm,disabled_:false})
      ,new DeleteNew({key_:0,
      name_:"Delete "+itmNm,
      value_:"Delete "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-danger",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Delete "+itmNm,disabled_:false})]);

    r.cssClass="flexCtnr flexRow";
    r.show=true;
    return r;
  }
  public static EditButtons(itmNm:string){
    let r = new HtmlItemNew(null);

      r.addArr([new SaveNew({key_:0,
      name_:"Save "+itmNm,
      value_:"Save "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-darkgreen",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Save "+itmNm,disabled_:false})
      ,new Cancel({key_:0,
      name_:"Cancel "+itmNm,
      value_:"Cancel "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-evening-night",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Cancel "+itmNm,disabled_:false})
      ,new CopyNew({key_:0,
      name_:"Copy "+itmNm,
      value_:"Copy "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-unique",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Copy "+itmNm,disabled_:false})
      ,new DeleteNew({key_:0,
      name_:"Delete "+itmNm,
      value_:"Delete "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-danger",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Delete "+itmNm,disabled_:false})
      ]);

    r.cssClass="flexCtnr flexRow";
    r.show=true;
    return r;
  }
  public static AddNewButton(itmNm:string){
    let r = new HtmlItemNew(null);

      r.addArr([new NewAddNew({key_:0,
      name_:"Add new "+itmNm,
      value_:"Add new "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-darkgreen",show_:true
      ,HtmlTypeAttr_:"Add new"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Add new "+itmNm,disabled_:false})
      ]);

    r.cssClass="flexCtnr flexRow";
    r.show=true;
    // return r;

    let r2 = new Array<ButtonNew>(
      new NewAddNew({key_:0,
      name_:"Add new "+itmNm,
      value_:"Add new "+itmNm,
      typeName_:null
      ,array_:null
      ,itemControlls_:null
      ,cssClass_:"btn btn-darkgreen",show_:true
      ,HtmlTypeAttr_:"Add new"
      ,HtmlSubmittedValue_:null
      ,clicked_:false,toolTipText_:"Add new "+itmNm,disabled_:false})
    );


    return r2;

  }

  //quiz objects generating

  static answers(n:number){
    var r= new Array<AnswerNew>();

    for(var i=0;i<n;i++){
      r.push(new AnswerNew(
        {key_:i,
        name_:"Answer"+i,
        value_:"Answer"+i,
        typeName_:"AnswerNew",array_:null
        ,itemControlls_:null,cssClass_:"",show_:true
        ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""}
      ));
    }

    return r;
  }
  static questions(n:number){
    var r=new Array<QuestionNew>();

    for(var i=0;i<n;i++){
      r.push(new QuestionNew(
        {key_:i,
        name_:"Question"+i,
        value_:"Question"+i,
        typeName_:"QuestionNew",array_:FactoryNew.answers(3)
        ,itemControlls_:null,cssClass_:"",show_:true
        ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""}
      ));
    }

    return r;
  }
  static quizes(n:number){
    var r=new Array<QuizNew>();

    for(var i=0;i<n;i++){

      r.push(new QuizNew(
        {key_:i,
        name_:"Quiz name"+i,
        value_:"Quiz value"+i,
        typeName_:"QuizNew",array_:null
        ,itemControlls_:FactoryNew.quizItemParametersNewGen().array
        ,cssClass_:"",show_:true
        ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""}
      ));

    }
    return r;
  }

  static NewQuizItemObj(obj:QuizItemNew){
    let r: QuizItemNew;

    if(obj instanceof QuizNew){
      r= new QuizNew({key_:null,
      name_:"Quiz name",
      value_:"new quiz",
      typeName_:null,array_:new Array<QuestionNew>()
      ,itemControlls_:FactoryNew.quizItemParametersNewGen().array
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"",HtmlSubmittedValue_:"Enter quiz name"});
    }
    if(obj instanceof QuestionNew){
      r= new QuestionNew({key_:null,
      name_:"Question name",
      value_:"new question",
      typeName_:null,array_:new Array<AnswerNew>()
      ,itemControlls_:FactoryNew.questionParametersNewGen().array
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"",HtmlSubmittedValue_:"Enter question name"});
    }
    if(obj instanceof AnswerNew){
      r=new AnswerNew({key_:null,
      name_:"Answer name",
      value_:"new answer",
      typeName_:null,array_:null
      ,itemControlls_:null,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""})
    }
    return r;
  }
  static GenQuizes(qnM:number,qtnM:number,anM:number
    ,qzCss:string,qtCss:string,awCss:string){

    let nodes=new QuizItemNew({key_:0,
    name_:"Quizes",
    value_:"Quizes",
    typeName_:null,array_:new Array<QuizNew>(),
    itemControlls_:null,cssClass_:qzCss,show_:true,
    HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let qn=FactoryNew.rnd(1,qnM);

    for(let i=0;i<qn;i++){
      let qzNew=new QuizNew({key_:i,
      name_:"Quiz_name "+i,
      value_:"Quiz_value "+i,
      typeName_:null,array_:new Array<QuestionNew>()
      ,itemControlls_:FactoryNew.quizItemParametersNewGen().array
      ,cssClass_:qtCss,show_:true
      ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

        let qtn=FactoryNew.rnd(1,qtnM);

        for(let i2=0;i2<qtn;i2++){
          let qtNew=new QuestionNew({key_:i2,
          name_:"Question_name "+(i2),
          value_:"Question_value "+(i2),
          typeName_:"QuestionNew",array_:new Array<AnswerNew>()
          ,itemControlls_:FactoryNew.questionParametersNewGen().array
          ,cssClass_:awCss,show_:true
          ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

            let an=FactoryNew.rnd(1,anM);
            for(let i3=0;i3<an;i3++){
              let awNew=new AnswerNew({key_:i3,
              name_:"Answer_name "+(i3),
              value_:"Answer_value "+(i3),
              typeName_:"AnswerNew",array_:null
              ,itemControlls_:null,cssClass_:"",show_:true
              ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

              qtNew.array.push(awNew);
            }
          qzNew.array.push(qtNew);
        }

      nodes.array.push(qzNew);

    }

    return nodes;
  }

  static rnd(min:number,max:number){
    return Math.floor(Math.random()*(max-min)+min)
  }

}

export class ModelContainerNew{

  static QuizesPassed:QuizItemNew;

  static nodeSelected:QuizItemNew;
  static quizSelected:QuizNew;
  static questionSelected:QuestionNew;

  static answerSelected:AnswerNew;

  static buttonsQuiz_:ButtonNew[]
  static buttonsQuestions_:ButtonNew[]
  static buttonsAnswers_:ButtonNew[]

  @Output() static stateChanged=new EventEmitter();
  @Output() static nodeEdit=new EventEmitter();
  @Output() static nodeCopy=new EventEmitter();

  @Output() static disable=new EventEmitter();

  public static Init(){
    this.QuizesPassed=FactoryNew.GenQuizes(5,5,5,"flexCtnr flexRow","flexCtnr flexRow","flexCtnr flexCol");

    this.nodeSelected=null;
    this.quizSelected=null;
    this.questionSelected=null;

  }
  public static buttonClicked(btn_:ButtonNew,obj:HtmlItemNew,e:any){
    console.log(["buttonClicked :",btn_,obj,e])

    if(btn_ instanceof NewAddNew){
      console.log("add new");
      if(obj != null){if(obj instanceof QuizItemNew){
        ModelContainerNew.objectDetectAndCreate(obj);
        ModelContainerNew.nodeEdit.emit();
      }}
    }
    if(btn_ instanceof Cancel){
      console.log("cancel");
      ModelContainerNew.objectCnacel();
      ModelContainerNew.nodeEdit.emit();
    }

    if(btn_ instanceof EditNew){
      console.log("edit")
      if(obj != null){if(obj instanceof QuizItemNew){
        ModelContainerNew.objectDetectAndBind(obj);
        ModelContainerNew.nodeEdit.emit();
      }}
    }
    if(btn_ instanceof CopyNew){
      console.log("copy")
      ModelContainerNew.objectCopy(obj);
      ModelContainerNew.nodeCopy.emit();
    }
    if(btn_ instanceof SaveNew){
      console.log("save")
      ModelContainerNew.objectDetectAndSave(obj);

      ModelContainerNew.objectCnacel();
      ModelContainerNew.nodeEdit.emit();

      ModelContainerNew.nodeSelected=null;
    }
    if(btn_ instanceof DeleteNew){
      console.log("delete")
      ModelContainerNew.objectDelete(obj);
      // ModelContainerNew.objectCnacel();
      ModelContainerNew.nodeEdit.emit();
    }


    ModelContainerNew.stateChanged.emit();
  }
  public static checkboxClicked(item_:HtmlItemNew,object_:HtmlItemNew){
    ModelContainerNew.CycleCheckboxCheck(item_,object_);
    console.log(["checkboxClicked: ",item_,object_])
  }
  public static dropboxClicked(item_:HtmlItemNew){
    ModelContainerNew.DropBoxCheck(item_);
    ServiceCl.log(["dropboxClicked: ",item_]);
  }

  static objectCnacel(){
    if(ModelContainerNew.nodeSelected instanceof QuizNew){
      ServiceCl.log("QuizNew cancel")
      ModelContainerNew.quizSelected=null;
      ModelContainerNew.questionSelected=null;
    }
    if(ModelContainerNew.nodeSelected instanceof QuestionNew){
      console.log("QuestionNew cancel")
      ModelContainerNew.questionSelected=null;
    }
    if(ModelContainerNew.nodeSelected instanceof AnswerNew){
      console.log("AnswerNew cancel")

    }
    ModelContainerNew.nodeSelected=null;
  }
  static objectCopy(obj:HtmlItemNew){
    if(obj instanceof QuizItemNew){
      obj.nameObjectToItem();
      ModelContainerNew.nodeSelected=obj.recObj();
      ModelContainerNew.nodeSelected._key=null;
    }
  }

  static QuestionCountDetect(){

  }

  static objectDetectAndCreate(obj:HtmlItemNew){
    if(obj instanceof QuizNew){
      ModelContainerNew.nodeSelected=FactoryNew.NewQuizItemObj(new QuizNew(null));
    }
    if(obj instanceof QuestionNew){
      ModelContainerNew.nodeSelected=FactoryNew.NewQuizItemObj(new QuestionNew(null));
    }
    if(obj instanceof AnswerNew){
      ModelContainerNew.nodeSelected=FactoryNew.NewQuizItemObj(new AnswerNew(null));
    }
  }
  static objectDetectAndBind(obj:HtmlItemNew){

    if(obj instanceof QuizItemNew){
      ModelContainerNew.nodeSelected=obj;
      obj.nameObjectToItem();
      if(obj instanceof QuizNew){
        ModelContainerNew.answerSelected=null;
        ModelContainerNew.questionSelected=null;
        ModelContainerNew.quizSelected=obj;
      }
      if(obj instanceof QuestionNew){
        ModelContainerNew.answerSelected=null;
        ModelContainerNew.questionSelected=obj;
      }
      if(obj instanceof AnswerNew){
        ModelContainerNew.answerSelected=obj;
      }

    }
  }
  static objectDetectAndSave(obj:HtmlItemNew){
    if(obj instanceof QuizItemNew){
      obj.nameItemToObject();
      if(obj instanceof QuizNew){
        ModelContainerNew.QuizesPassed.addUpdate(obj);
      }
      if(obj instanceof QuestionNew){
        ModelContainerNew.quizSelected.addUpdate(obj);
      }
      if(obj instanceof AnswerNew){
        ModelContainerNew.questionSelected.addUpdate(obj);
      }
    }
  }
  static objectDelete(obj:HtmlItemNew){
    if(obj instanceof QuizItemNew){
      if(obj instanceof QuizNew){
        this.QuizesPassed.delete(obj);
        ModelContainerNew.quizSelected=null;
      }
      if(obj instanceof QuestionNew){
        this.quizSelected.delete(obj);
        ModelContainerNew.questionSelected=null;
      }
      if(obj instanceof AnswerNew){
        this.questionSelected.delete(obj);
      }
    }
  }

  static CycleCheckboxCheck(item_:HtmlItemNew,object_:HtmlItemNew){
    if(item_._name=="CycleCheckboxItem"){
      if(object_ instanceof QuizItemNew){
        let nbGroup=object_.getControllItem("NumberPickerGroup");
        let dbGroup=object_.getControllItem("DropBoxesGroup");
        if(nbGroup!=null){nbGroup.show=item_.HtmlSubmittedValue;}
        if(dbGroup!=null){dbGroup.show=item_.HtmlSubmittedValue;}
      }
    }
  }
  static DropBoxCheck(item_:HtmlItemNew){
    if(item_.HtmlSubmittedValue=="Text answer"){

      if(ModelContainerNew.nodeSelected instanceof QuestionNew){


        if(ModelContainerNew.questionSelected.array.length==1){
          // ServiceCl.log(["Disable NewAddNew"])
          ModelContainerNew.disable.emit({btn:new NewAddNew(null)
            ,obj:new QuestionNew(null)});
        }

        if(ModelContainerNew.questionSelected.array.length>1){
          // ServiceCl.log(["Disable NewAddNew,SaveNew"])
          ModelContainerNew.disable.emit({btn:new SaveNew(null)
            ,obj:new QuestionNew(null)});
          ModelContainerNew.disable.emit({btn:new NewAddNew(null)
            ,obj:new QuestionNew(null)});
        }



      }
    }
  }

}

export class TestNew{

  //intrinsic collections test

  static LabelControlNewTest(n:number,cssItem_:string,){
    var r = new HtmlItemNew(null);

      for(var i=0;i<n;i++){
        r.add(new LabelControlNew({
          key_:i,
          name_:"LabelCtrl_"+i,
          value_:"LabelCtrl_"+i,
          typeName_:null
          ,array_:null
          ,cssClass_:cssItem_,show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:"text value"+i
          })
        );
      }
    r.cssClass=cssItem_;
    return r;
  }

  static TextControlNewTest(n:number,cssGroup_:string,cssItem_:string){
    var r = new HtmlItemNew(null);

      for(var i=0;i<n;i++){
        r.add(new TextControlNew({
          key_:i,
          name_:"Textctrl"+i,
          value_:"Textctrl"+i,
          typeName_:null
          ,array_:null
          ,cssClass_:cssItem_,show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:"text value"+i
          ,DisplayValue_:""
          ,pattern_:null
          ,maxLength_:null
          ,minLength_:null})
        );
      }
    r.cssClass=cssGroup_;
    return r;
  }
  static CheckBoxControlNewTest(n:number,cssGroup_:string,cssItem_:string){
    var r= new HtmlItemNew(null);

    for(var i=0;i<n;i++){
      r.add(
        new CheckBoxControlNew({
          key_:0,
          name_:"CheckBox_"+i,
          value_:"CheckBox_"+i,
          typeName_:null
          ,array_:null
          ,cssClass_:cssItem_,show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:true
        }));
    }
    r.cssClass=cssGroup_;
    return r;
  }
  static RadioButtonControlNewTest(n:number,cssGroup_:string,cssItem_:string){
    var r= new HtmlItemNew(null);

    for(var i=0;i<n;i++){
      r.add(
        new RadioButtonControlNew({
          key_:0,
          name_:"RadioCtrl_"+i,
          value_:"RadioCtrl_"+i,
          typeName_:null
          ,array_:TestNew.LabelControlNewTest(n,"col").array
          ,cssClass_:cssItem_,show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:true
        }));
    }
    r.cssClass=cssGroup_;
    return r;
  }
  static DropDownControlMultiNewTest(n:number){
      var r= new HtmlItemNew(null);
      for(var i=0;i<n;i++){
        r.add( new DropDownControlMultiNew({
              key_:0,
              name_:"Textctrl_"+i,
              value_:"Textctrl_"+i,
              typeName_:null
              ,array_:TestNew.TextControlNewTest(3,"row","row").array
              ,cssClass_:"",show_:true
              ,HtmlTypeAttr_:"div"
              ,HtmlSubmittedValue_:""
              }));
      }

      return r;
  }
  static DatePickerControlTest(n:number,cssGroup_:string,cssItem_:string){
      var r= new HtmlItemNew(null);
      for(var i=0;i<n;i++){
        r.add(new DatePickerControlNew({
        key_:0,
        name_:"Datepicker_"+i,
        value_:"Datepicker_"+i,
        typeName_:null
        ,array_:null
        ,cssClass_:cssItem_,show_:true
        ,HtmlTypeAttr_:"div"
        ,HtmlSubmittedValue_:new Date(2018,1,1+i)
        }));
      }
      r.cssClass=cssGroup_;
      return r;
  }
  public static HtmlItemNestedCollectionsCheck(){
    console.log(["TextControlNew ",TestNew.TextControlNewTest(3,"row","row")])
    console.log(["CheckBoxControlNew ",TestNew.CheckBoxControlNewTest(3,"row","row")])
    console.log(["RadioButtonControlNew ",TestNew.RadioButtonControlNewTest(3,"row","row")])
    console.log(["DropDownControlMultiNewTest ",TestNew.DropDownControlMultiNewTest(3)])
    console.log(["DatePickerControlTest ",TestNew.DatePickerControlTest(5,"row","row")])

  }
  public static NumberPickerControlTest(n:number,cssGroup_:string,cssItem_:string){
    var r = new HtmlItemNew(null);

      for(var i=0;i<n;i++){
        r.add(new NumberPickerControlNew({
          key_:i,
          name_:"NmberPicker "+i,
          value_:"NmberPicker "+i,
          typeName_:null
          ,array_:null
          ,cssClass_:cssItem_,show_:true
          ,HtmlTypeAttr_:"div"
          ,HtmlSubmittedValue_:null
          ,DisplayValue_:0
          ,minN:-2
          ,maxN:3})
        );
      }
    r.cssClass=cssGroup_;
    return r;
  }

  public static NodeCollectionNewTypeNamesCheck(){

    let n = new NodeNew({key_:2,name_:"Answer1",value_:"Answer1",typeName_:null});
    let nc = new CollectionNew<NodeNew>({key_:2,name_:"Answer1",value_:"Answer1"
    ,typeName_:null,array_:null});
    let h = new HtmlItemNew({key_:2,name_:"Answer1",value_:"Answer1"
    ,typeName_:null,array_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let qw = new AnswerNew({key_:0,
    name_:"Answer1",
    value_:"Answer1",
    typeName_:null,array_:null
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    if(n._typeName=="NodeNew"){console.log(["NodeNew _typeName OK",n])}
    else{console.log(["NodeNew _typeName OK",n])}
    if(nc._typeName=="CollectionNew"){console.log(["CollectionNew _typeName OK",nc])}
    else{console.log(["CollectionNew _typeName NOT OK",nc])}
    if(h._typeName=="HtmlItemNew"){console.log(["HtmlItemNew _typeName OK",h])}
    else{console.log(["HtmlItemNew _typeName NOT OK",h])}
    if(qw._typeName=="AnswerNew"){console.log(["HtmlItemNew _typeName OK",qw])}
    else{console.log(["AnswerNew _typeName NOT OK",qw])}


    console.log(["NodeCollectionNewTypeNamesCheck",n,nc])

  }
  public static NodeCollectionNewCheck(){

    let n0:CollectionNew<NodeNew>=new CollectionNew<NodeNew>({key_:2,
    name_:"Answer1",
    value_:"Answer1",
    typeName_:null,array_:null});

    let n1: CollectionNew<NodeNew>=new  CollectionNew<NodeNew>({key_:1,
    name_:"Answer2",
    value_:"Answer2",
    typeName_:null,array_:null});

    let c0:CollectionNew<NodeNew>=new CollectionNew<NodeNew>({key_:1,
    name_:"Question1",
    value_:"Question1",
    typeName_:null,array_:[n0,n1]});


    let r:CollectionNew<NodeNew>=new CollectionNew<NodeNew>({key_:0,
    name_:"Quiz0",
    value_:"Quiz0",
    typeName_:null,array_:[c0]});

    if(r.array.length!=-1){console.log(["CollectionNew array OK",r]);}
    else{console.log(["CollectionNew array NOT OK",r]);}
    let nc=r.array[0];
    if( nc instanceof CollectionNew){
      if(nc.array[0].array.length!=-1){console.log(["CollectionNew nested array OK",r]);}
      else{console.log(["CollectionNew nested array NOT OK",r]);}
    }

    // console.log(JSON.stringify(r));

  }
  public static QuizHierarhyCheck(){

    let parentNode=new HtmlItemNew({key_:0,
    name_:"ParentNode",
    value_:"ParentNode",
    typeName_:"HtmlItemNew",array_:null,
    cssClass_:"",show_:true,
    HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let a0=new AnswerNew({key_:100,
    name_:"Answer1",
    value_:"Answer1",
    typeName_:"AnswerNew",array_:null
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let a1=new AnswerNew({key_:99,
    name_:"Answer2",
    value_:"Answer2",
    typeName_:"AnswerNew",array_:null
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let q0=new QuestionNew({key_:89,
    name_:"Question1",
    value_:"Question1",
    typeName_:"QuestionNew",array_: [a0,a1]
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let q1=new QuestionNew({key_:88,
    name_:"Question2",
    value_:"Question2",
    typeName_:"QuestionNew",array_:[a1]
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let qz0=new QuizNew({key_:87,
    name_:"Quiz1",
    value_:"Quiz1",
    typeName_:null,array_:[q1]
    ,itemControlls_:null,cssClass_:"",show_:true
    ,HtmlTypeAttr_:"",HtmlSubmittedValue_:""});

    let t0=new TextControlNew({
      key_:70,
      name_:"Textctrl1",
      value_:"Textctrl1",
      typeName_:"TextControlNew"
      ,array_:null
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"
      ,DisplayValue_:""
      ,pattern_:null
      ,maxLength_:null
      ,minLength_:null});
      let cb0=new CheckBoxControlNew({key_:69,
      name_:"Checkbox1",
      value_:"Checkbox1",
      typeName_:"CheckBoxControlNew"
      ,array_:null
      ,cssClass_:"",show_:true
      ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:true
    });

    let tbdd0=new TextControlNew({key_:60,name_:"Textctrl20",value_:"Textctrl20",
    typeName_:"TextControlNew",array_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"div"
    ,HtmlSubmittedValue_:"drop box tb1",DisplayValue_:"",pattern_:null,maxLength_:null,minLength_:null});
    let tbdd1=new TextControlNew({key_:61,name_:"Textctrl21",value_:"Textctrl21",
    typeName_:"TextControlNew",array_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"div"
    ,HtmlSubmittedValue_:"drop box tb2",DisplayValue_:"",pattern_:null,maxLength_:null,minLength_:null});
    let tbdd2=new TextControlNew({key_:62,name_:"Textctrl22",value_:"Textctrl22",
    typeName_:"TextControlNew",array_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"div"
    ,HtmlSubmittedValue_:"drop box tb3",DisplayValue_:"",pattern_:null,maxLength_:null,minLength_:null});
    let tddArr=[tbdd0,tbdd1,tbdd2]
    let ddC0=new DropDownControlNgNew({key_:68,
    name_:"DropDownControlNgNew1",
    value_:"DropDownControlNgNew1",
    typeName_:"DropDownControlNgNew"
    ,array_:tddArr
    ,cssClass_:"col",show_:true
    ,HtmlTypeAttr_:"column"
    ,HtmlSubmittedValue_:true
    });

    let rb0=new RadioButtonControlNew({key_:59,name_:"Rbctrl1",value_:"Rbctrl1",
    typeName_:"RadioButtonControl",array_:tddArr,cssClass_:"row",show_:true,HtmlTypeAttr_:"div"
    ,HtmlSubmittedValue_:"radio controll 01"});

    qz0.itemControlls=[t0,cb0,ddC0,rb0];

    parentNode.array=[qz0];

    if(parentNode.array.length!=-1){
      if(parentNode.array[0].array.length!=-1){
        if(parentNode.array[0].array[0].array.length!=-1){
          console.log(["Quiz hierarchy OK",parentNode])
        }
      }
    }
  }
  public static FactoryNewQuizGenCheck(){
      let min=3;
      let max=10;

      let qzRnd=Math.floor(Math.random()*(max-min)+min);
      let qtRnd=Math.floor(Math.random()*(max-min)+min);
      let awRnd=Math.floor(Math.random()*(max-min)+min);

      //random check
      /*
      let arr:number[]=[];
      for(let z=0;z<1000;z++){
        arr.push(Math.floor(Math.random()*(max-min)+min))
      }
      console.log(["Rand arr: ", arr.length,Math.min.apply(min,arr),Math.max.apply(min,arr)])
      */

      let r=FactoryNew.GenQuizes(qzRnd,qtRnd,awRnd,"col","col","col")

      if(r!=null){

        let qz=r.array[0]
        let qs=qz.array[0];
        qz.tolog=true;
        let qsf=qz.getByItem(qs);
        let qsn=qz.getByName(qs._name);

        let qzt=qz.getType();

        if(qs===qsf){console.log(["getByItem OK",qsf])}
        if(qs===qsn){console.log(["getByName OK",qsn])}

      }
      console.log(["FactoryQuizGenCheck ",r])
  }


  //Generates array of buttons with object for items render

  public static Buttons(){

    let r :{buttons_:HtmlItemNew;object_:HtmlItemNew;}[];

    r=[{
        buttons_:new HtmlItemNew({key_:0,name_:"Test button 0",value_:"Test button 0"
        ,typeName_:null,array_:[
          new ButtonNew({key_:0,name_:"Button1",value_:"Test button 1"
          ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn"
          ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
          ,toolTipText_:"test 1",disabled_:false})
          ,new ButtonNew({key_:1,name_:"Button2",value_:"Test button 2"
          ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn btn-purple-gradient"
          ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
          ,toolTipText_:"test 2",disabled_:false})
          ,new ButtonNew({key_:2,name_:"Button3",value_:"Test button 3"
          ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn btn-purple"
          ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
          ,toolTipText_:null,disabled_:false})
        ],cssClass_:"row",show_:true,HtmlTypeAttr_:""
        ,HtmlSubmittedValue_:""})
        ,object_:new TextControlNew({
        key_:0,name_:"Textctrl"+0,value_:"Textctrl"+0,typeName_:null
        ,array_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"div"
        ,HtmlSubmittedValue_:"text value"+0,DisplayValue_:"",pattern_:null,maxLength_:null
        ,minLength_:null})
    } ,{
      buttons_:new HtmlItemNew({key_:0,name_:"Test button 1",value_:"Test button 1"
      ,typeName_:null,array_:[
        new ButtonNew({key_:0,name_:"Button10",value_:"Test button 10"
        ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn"
        ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
        ,toolTipText_:"test 10",disabled_:false})
        ,new ButtonNew({key_:1,name_:"Button11",value_:"Test button 11"
        ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn btn-purple-gradient"
        ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
        ,toolTipText_:"test 11",disabled_:false})
        ,new ButtonNew({key_:2,name_:"Button12",value_:"Test button 12"
        ,typeName_:null,array_:null,itemControlls_:null,cssClass_:"btn btn-purple"
        ,show_:true,HtmlTypeAttr_:"",HtmlSubmittedValue_:"",clicked_:false
        ,toolTipText_:null,disabled_:false})
      ],cssClass_:"btn-group-vertical",show_:true,HtmlTypeAttr_:""
      ,HtmlSubmittedValue_:""})
      ,object_:new QuizNew({
      key_:0,name_:"Textctrl"+0,value_:"Textctrl"+0,typeName_:null
      ,array_:null,itemControlls_:null,cssClass_:"",show_:true,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0})
    }];

    return r;

  }

  //detect button type and create instance

  public static TestItemButtonsByType(i_:ButtonNew,cnt_:number
    ,cssGroup_:string,cssItem_:string){
    let r = new HtmlItemNew(null);
    let a = new Array<ButtonNew>();
      for(let i =0; i< cnt_;i++){
        let o ={key_:i,
        name_:"Button name " +i,
        value_:"Month value" + (i+1),
        typeName_:null
        ,array_:null
        ,itemControlls_:null
        ,cssClass_:cssItem_,show_:true
        ,HtmlTypeAttr_:"div"
        ,HtmlSubmittedValue_:null
        ,clicked_:false,toolTipText_:"test button to click "+i,disabled_:false};

        if(i_ instanceof NewAddNew){
          let oR=new NewAddNew(o);
          oR._value=oR._typeName+i;
          a.push(oR)
        }
        if(i_ instanceof SaveNew){
          let oR=new SaveNew(o);
          oR._value=oR._typeName + ' ' +i;
          a.push(oR)}
        if(i_ instanceof EditNew){
          let oR=new EditNew(o);
          oR._value=oR._typeName+i;
          a.push(oR)}
      }

    r.array=a;
    r.cssClass=cssGroup_;
    return r;
  }

  //generate buttons

  public static TestItemButtons(cssGp:string,cssItems:string){
    let r = new HtmlItemNew(null);

      r.add(TestNew.TestItemButtonsByType(new NewAddNew(null),2,cssItems,"btn"))
      r.add(TestNew.TestItemButtonsByType(new SaveNew(null),1,cssItems,"btn btn-success"))
      r.add(TestNew.TestItemButtonsByType(new EditNew(null),3,cssItems,"btn btn-danger"))

    r.cssClass=cssGp;
    return r;
  }


  //Generating quizes

  public static QuizList(){

    let r=FactoryNew.GenQuizes(5,5,5,"flexCtnr flexRow","flexCtnr flexRow","flexCtnr flexCol");

    return r;

  }

  //Specific parametrized generation

  public static CheckBoxes(n_:number,cssGroup_:string,cssItem_:string){
    let r = TestNew.CheckBoxControlNewTest(n_,cssGroup_,cssItem_);
      r.cssClass=cssGroup_;
    return r;
  }

  public static RadioButton(n_:number,cssGroup_:string,cssItem_:string){
    let r = TestNew.RadioButtonControlNewTest(n_,cssGroup_,cssItem_);
      r.cssClass=cssGroup_;
    return r;
  }

  public static DropBoxCheckBox(n_:number,i_:number,cssGroup_:string,cssItem_:string){
    let r = new HtmlItemNew(null);
    for(let i=0;i<n_;i++){
      r.add(
        new DropDownControlMultiNew({key_:i,name_:"Drop box "+i,value_:"Drop box "+i
        ,typeName_:null
        ,array_:TestNew.CheckBoxControlNewTest(i_,"row","row").array
        ,cssClass_:cssItem_,show_:true,HtmlTypeAttr_:null,HtmlSubmittedValue_:null})
      );
    }

    r.cssClass=cssGroup_;
    return r;
  }
  public static DropBoxLabelBox(n_:number,i_:number,cssGroup_:string,cssItem_:string){
    let r = new HtmlItemNew(null);
    for(let i =0;i<n_;i++){
      r.add(
        new DropDownControlMultiNew({key_:i,name_:"Drop box "+i,value_:"Drop box "+i
        ,typeName_:null
        ,array_:TestNew.LabelControlNewTest(i_,"row").array
        ,cssClass_:cssItem_,show_:true,HtmlTypeAttr_:null,HtmlSubmittedValue_:null})
      );
    }

    r.cssClass=cssGroup_;
    return r;
  }
  public static DropBoxAssorty(n_:number,i_:number,cssGroup_:string,cssItem_:string){
    let r = new HtmlItemNew(null);
    for(let i =0;i<n_;i++){
      r.addArr([
        new DropDownControlMultiNew({key_:i,name_:"Drop box "+i,value_:"Drop box "+i
        ,typeName_:null
        ,array_:TestNew.TextControlNewTest(i_,"row","row").array
        ,cssClass_:cssItem_,show_:true,HtmlTypeAttr_:null,HtmlSubmittedValue_:null})
        ,new DropDownControlMultiNew({key_:i,name_:"Drop box "+i,value_:"Drop box "+i
        ,typeName_:null
        ,array_:TestNew.CheckBoxControlNewTest(i_,"row","row").array
        ,cssClass_:cssItem_,show_:true,HtmlTypeAttr_:null,HtmlSubmittedValue_:null})
        ,new DropDownControlMultiNew({key_:i,name_:"Drop box "+i,value_:"Drop box "+i
        ,typeName_:null
        ,array_:TestNew.LabelControlNewTest(i_,"row").array
        ,cssClass_:cssItem_,show_:true,HtmlTypeAttr_:null,HtmlSubmittedValue_:null})
      ] );
    }

    r.cssClass=cssGroup_;
    return r;
  }

  //tests typechecker correct type return

  public static TypeCheckTest(){

    let arr=new Array<string>();
    let _ok=" OK";let _not=" NOT OK";

    let res="Type check null";
    if(FactoryNew.TypeCheck(null)==null){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check HtmlItemNew";
    if(FactoryNew.TypeCheck(new HtmlItemNew(null))=="HtmlItemNew"){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check TextControlNew";
    if(FactoryNew.TypeCheck(new TextControlNew(null))=="TextControlNew"){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check ButtonNew";
    if(FactoryNew.TypeCheck(new ButtonNew(null))=='Button'){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check CheckBox";
    if(FactoryNew.TypeCheck(new CheckBoxControlNew(null))=='CheckBox'){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check DropDownControlNgNew";
    if(FactoryNew.TypeCheck(new DropDownControlNgNew(null))=='DropDownControlNgNew'){res+=_ok}else{res+=_not}
    arr.push(res);
    res="Type check DropDownControlMultiNgNew";
    if(FactoryNew.TypeCheck(new DropDownControlMultiNgNew(null))=='DropDownControlMultiNgNew'){res+=_ok}else{res+=_not}
    arr.push(res);
    res="Type check DropDownControlMultiNew";
    if(FactoryNew.TypeCheck(new DropDownControlMultiNew(null))=='DropDownControlMultiNew'){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check RadioButtonControlNew";
    if(FactoryNew.TypeCheck(new RadioButtonControlNew(null))=='RadioButton'){res+=_ok}else{res+=_not}
    arr.push(res);

    res="Type check NumberPickerControlNew";
    if(FactoryNew.TypeCheck(new NumberPickerControlNew(null))=='NumberPickerControlNew'){res+=_ok}else{res+=_not}
    arr.push(res);

    console.log(["TypeCheckTest: ",arr])

  }

  //html controlls

  public static ControllsBulkGen(){
    return new Array<HtmlItemNew>(
      TestNew.CheckBoxes(5,"row item","col")
      ,TestNew.CheckBoxes(6,"col item","row")
      ,TestNew.DropBoxCheckBox(3,5,"row item","col")
      ,TestNew.DropBoxLabelBox(4,5,"col item","row")
      ,TestNew.DropBoxAssorty(1,3,"row item","col")
      ,TestNew.TextControlNewTest(4,"row item","col")
      ,TestNew.TextControlNewTest(3,"col item","row")
      ,TestNew.LabelControlNewTest(3,"row")
      ,TestNew.LabelControlNewTest(3,"col")
      ,TestNew.LabelControlNewTest(3,"col")
    );
  }
  public static ControllsGroupsGen(){
    let r = new HtmlItemNew(null);

    let a0=new HtmlItemNew({
      key_:0, name_:"Textctrl"+0,value_:"Textctrl"+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.CheckBoxes(2,"col","row")
        ,TestNew.CheckBoxes(4,"col","row")
        ,TestNew.CheckBoxes(3,"col","row")
      )
      ,cssClass_:"row item",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a1=new HtmlItemNew({
      key_:0, name_:"Textctrl"+0,value_:"Textctrl"+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.CheckBoxes(3,"col item","row item")
        ,TestNew.DropBoxCheckBox(3,5,"row item","col")
        ,TestNew.DropBoxLabelBox(4,5,"col item","row")
      )
      ,cssClass_:"row item",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a2=new HtmlItemNew({
      key_:0, name_:"Textctrl"+0,value_:"Textctrl"+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.CheckBoxes(3,"col item","row item")
        ,TestNew.DropBoxAssorty(1,5,"row item","col")
        ,TestNew.TextControlNewTest(3,"row item","row item")
        ,TestNew.LabelControlNewTest(3,"col item")
      )
      ,cssClass_:"col item",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a3 = new HtmlItemNew({
      key_:0, name_:"Textctrl"+0,value_:"Textctrl"+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.RadioButtonControlNewTest(3,"fxvt","fxhr")
      )
      ,cssClass_:"",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a4=new HtmlItemNew({
      key_:0, name_:"NmbrCtrl "+0,value_:"NmbrCtrl "+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.NumberPickerControlTest(3,"fxhr","fxvt")
      ),cssClass_:"",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a42=new HtmlItemNew({
      key_:0, name_:"NmbrCtrl "+0,value_:"NmbrCtrl "+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.NumberPickerControlTest(3,"fxvt","fxhr")
      ),cssClass_:"",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});


    let a5=new HtmlItemNew({
      key_:0, name_:"DateCtrl "+0,value_:"DateCtrl "+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.DatePickerControlTest(2,"fxhr","fxvt")
      ),cssClass_:"",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a6=new HtmlItemNew({
      key_:0, name_:"DateCtrl "+0,value_:"DateCtrl "+0, typeName_:null
      ,array_: new Array<HtmlItemNew>(
        TestNew.DatePickerControlTest(2,"fxvt","fxhr")
      ),cssClass_:"",show_:true ,HtmlTypeAttr_:"div"
      ,HtmlSubmittedValue_:"text value"+0});

    let a7 = FactoryNew.GenQuizes(2,1,1,"fxvt","fxhr","fxvt");

    r.cssClass=""
    r.add(a0)
    r.add(a1)
    r.add(a2)
    r.add(a3)
    r.add(a4)
    r.add(a42)
    r.add(a5)
    r.add(a6)

    //Exclude quizitems from list
    // r.add(a7)

    return r;
  }

  public static DeepCopyTest(){

    let qz=
      FactoryNew.GenQuizes(5,5,5,"flexCtnr flexRow","flexCtnr flexRow","flexCtnr flexCol").array[0];
    let qzCp=qz.recObj();

    let qzItm:HtmlItemNew;
    let qzItmCp:HtmlItemNew;

    if(qz instanceof QuizNew){
      qzItm=qz.scan("MonthsGap",qz.itemControlls);
    }
    if(qzCp instanceof QuizNew){
      qzItmCp=qzCp.scan("MonthsGap",qzCp.itemControlls);
    }
    qzItm._value="cahnged";
    console.log(["Quiz recursive check: ",qz,qzCp,qzItm,qzItmCp])

  }

  public static ItemColelctionTest(){

    let OK="OK";
    let notOK="NOT OK";
    let qz = new HtmlItemNew(null);

    for(let i=0;i<5;i++){
      qz.add(FactoryNew.NewQuizItemObj(new QuizNew(null)));
    }
    console.log(["ItemColelctionTest: ",qz.array]);


    //add check

    let idPrev=qz.array.length-1;
    let qzNew=FactoryNew.NewQuizItemObj(new QuizNew(null));
    qz.add(qzNew);
    if(qz.array[qz.array.length-1]._key==idPrev+1){
      console.log(["ItemColelctionTest add: "+ OK,qz.array,qzNew]);
    }else{console.log(["ItemColelctionTest add: "+ notOK,qz.array,qzNew]);}


    // add update check

    idPrev=qz.array.length-1;
    let qzAddUpd=FactoryNew.NewQuizItemObj(new QuizNew(null));
    // console.log(["ItemColelctionTest addUpdate start: ",qzAddUpd]);
    qz.addUpdate(qzAddUpd);
    if(qz.array[qz.array.length-1]._key==idPrev+1){
      console.log(["ItemColelctionTest addUpdate: " + OK,qz.array,qzAddUpd]);
    }else{console.log(["ItemColelctionTest addUpdate: " + notOK,qz.array,qzAddUpd]);}


    //quiz update

    let newName="name changed";
    let qzUpd=qz.array[3];
    qzUpd._name=newName;
    qz.update(qzUpd);
    if(qz.array[3]._name===newName){
      console.log(["ItemColelctionTest clean update : " + OK,qz.array,qzUpd]);
    }else{console.log(["ItemColelctionTest clean update : " + notOK,qz.array,qzUpd]);}


    //add update

    newName="name changed2";
    qzUpd._name=newName;
    qz.addUpdate(qzUpd);
    if(qz.array[3]._name===newName){
      console.log(["ItemColelctionTest addUpdate : " + OK,qz.array,qzUpd]);
    }else{console.log(["ItemColelctionTest addUpdate : " + notOK,qz.array,qzUpd]);}


    //delete check

    idPrev=qz.array.length-1;
    qz.delete(qzUpd);
    if(qz.array.length-1==(idPrev-1)){
      console.log(["ItemColelctionTest delete : " + OK,qz.array,qzUpd]);
    }else{console.log(["ItemColelctionTest delete : " + notOK,qz.array,qzUpd]);}


    //clone chech

    idPrev=qz.array.length-1;
    let qzChng=qz.array[2];
    let qzCp=qzChng.recObj();

    let itmOrig:HtmlItemNew;
    let itmChange:HtmlItemNew;

    if(qzChng instanceof QuizNew){
      itmOrig=qzChng.scan("IsAnonimous",qzChng.itemControlls)}
    if(qzCp instanceof QuizNew){
      itmChange=qzChng.scan("IsAnonimous",qzCp.itemControlls)}

    itmChange.HtmlSubmittedValue=true;
    itmOrig.HtmlSubmittedValue=false;
    if(itmChange.HtmlSubmittedValue!==itmOrig.HtmlSubmittedValue){
      console.log(["Clonned :" + OK,qzChng,qzCp,itmOrig.HtmlSubmittedValue,itmChange.HtmlSubmittedValue])
    }else{console.log(["Clonned :" + notOK,qzChng,qzCp,itmOrig.HtmlSubmittedValue,itmChange.HtmlSubmittedValue])}

  }

  public static QuizCicleCheckboxesTets(){
    let qz = FactoryNew.GenQuizes(5,5,5,"flexCtnr flexRow","flexCtnr flexRow","flexCtnr flexCol");

    qz.getControllItem("");
  }

  public static GO(){

    //collection tests

    //TestNew.NodeCollectionNewTypeNamesCheck();
    //TestNew.NodeCollectionNewCheck();
    //TestNew.QuizHierarhyCheck();


    //test newsted collections
    //TestNew.HtmlItemNestedCollectionsCheck();


    //check factory
    //TestNew.FactoryNewQuizGenCheck();


    //type checker Test
    //TestNew.TypeCheckTest();


    //check cloning

    // TestNew.DeepCopyTest();


    //check collection array beahaviour

    // TestNew.ItemColelctionTest();

  }

}
