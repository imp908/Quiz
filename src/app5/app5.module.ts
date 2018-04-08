import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule ,Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import { AppComponent5 } from '../app5/app5.component';

//npm install --save @ng-bootstrap/ng-bootstrap
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';



/*
//	npm install --save @angular/material @angular/cdk
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//  npm install --save @angular/animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
*/

import {testComponent} from '../quest/Quiz/Test/test.component';
import {mainComponent2} from '../quest/Quiz/Mc/main.component';
import {answerComponent} from '../quest/Quiz/Answer/answer.component';
import {questionComponent} from '../quest/Quiz/Question/question.component';
import {quizComponent} from '../quest/Quiz/Quizes/quiz.component';
import {listComponent} from '../quest/Quiz/List/list.component';

import {HS} from '../quest/Quiz/Http/quiz.service';

import {httpClick} from '../quest/Quiz/Http/httpClick.component';

@NgModule({
  declarations: [
    AppComponent5
    ,testComponent
    ,mainComponent2,answerComponent,questionComponent,quizComponent,listComponent
    ,httpClick
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    //bootstrap
    NgbModule.forRoot(),

     // import HttpClientModule after BrowserModule.
     HttpClientModule,

    /*
    //matdesign animations
    ,BrowserAnimationsModule
    //matdesign components
    ,MatButtonModule, MatCheckboxModule

    ,MatTableModule
    */
  ],
  providers: [HS],
  bootstrap: [AppComponent5]
})
export class AppModule5 { }
