import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import {answerComponent} from '../Answer/answer.component';

import {HS} from '../Http/quiz.service';

import {serviceCl,Quiz,IPrimitiveCollection} from '../Model/QtMd.component';


@Component({
  selector: 'httpClick-component'
  ,templateUrl: './httpClick.component.html'
  //,providers:[]
  ,providers: [ HS ]
})

export class httpClick
{
  className: string;
  url_:string="";
  service:serviceCl= new serviceCl();
  _quizGet:any;
  qz:Quiz;
  //_quizes:Quiz[];
  _quizes:IPrimitiveCollection<Quiz>;
  constructor (private hs_:HS){
      this.className=this.constructor.name;
  }

  GetQuiz(){
      serviceCl.log("GetQuiz");

      //calls get method returns observable
      // this._quizGet=this.hs_.getQuizUrlResponse(this.url_);
      // serviceCl.log(['Quizes HS ',this._quizGet]);

      //calls get method returns observable
      // this._quizGet=this.hs_.getQuizResponse(this.url_);
      // serviceCl.log(['Quizes HS ',this._quizGet]);

      //not calls any method
      serviceCl.log(['Quizes before ',this._quizes]);
      this.hs_.showQuizResponse(this.url_);
      this._quizes=this.hs_.quizes_;
      //this._quizes=this.service.genericQuizCollection();
      serviceCl.log(['Quizes after ',this._quizes]);
  }

  AddQuiz(){
      serviceCl.log("AddQuiz");
      this.qz=new Quiz(0,"qz add",new Date('01.01.2017'));
      this.hs_.showAddQuiz(this.url_,this.qz);
      serviceCl.log(["Quiz",this.qz, "to ",this.url_]);
  }
}
