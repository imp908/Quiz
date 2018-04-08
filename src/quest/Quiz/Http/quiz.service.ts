import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Quiz,IPrimitiveCollection} from '../Model/QtMd.component';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //,    'Authorization': 'my-auth-token'
  })
};

export interface value_cl {
  prop1: any;
  prop2: any;
}

@Injectable()
export class HS{

  private url:string =
  //'http://msk1-vm-ovisp01:8185/api/quiz2'
  'http://localhost:63282/api/quiz2'
  ;
  className: string;

  value_:value_cl;
  quizes_:IPrimitiveCollection<Quiz>;

  constructor(
    private http: HttpClient
  ) { this.className = "HS";}

  // addQuiz_ (quiz: Quiz): Observable<Quiz[]> {
  //     return this.http.post<Quiz[]>(this.url, Quiz, httpOptions);
  // }
  //
  // getQuiz(): Observable<Quiz[]> {
  //     //return this.http.get<Quiz[]>(this.url);
  //     return this.http.get<Quiz[]>(this.url);
  // }
  // getQuizes(url_:string) {
  //     return this.http.get<value_cl>(url_);
  // }
  // getQuizResponse_(url_:string) {
  //     console.log('getQuizResponse');
  //     return this.http.get(url_,{observe: 'response'})
  //     .subscribe(r=>{
  //       //const ks=r.headers.keys();
  //       //console.log(r.body);
  //     });
  // }
  //
  // getQuizUrlResponse(url_:string) {
  //     console.log("Passed url: ",url_)
  //     return this.http.get(url_,{observe: 'response'})
  //     .subscribe(r=> this.value_={
  //     prop1: r['prop1']
  //     ,prop2: r['prop2']
  //       //const ks=r.headers.keys();
  //       //console.log(r.body);
  //     });
  // }


  //get action
  getQuizResponse(url_:string): Observable<HttpResponse<IPrimitiveCollection<Quiz>>> {

  return this.http.get<IPrimitiveCollection<Quiz>>(
    url_, { observe: 'response' });
  }
  //get listener
  showQuizResponse(url_:string){
    this.getQuizResponse(url_)
    .subscribe(
      response=>{
        this.quizes_ = { ... response.body };
      }
    );
  }

  //POST action
  addQuiz (url_:string,quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(url_, quiz, httpOptions);
  }

  showAddQuiz(url_:string,quiz: Quiz){

    this.addQuiz(url_,quiz)
    .subscribe(q => this.quizes_.addUpdate(q));

  }

  //get value action
  getValueResponse(url_:string): Observable<HttpResponse<value_cl>> {
  return this.http.get<value_cl>(
    url_, { observe: 'response' });
  }

  //get value listener
  showValueResponse(url_:string) {
    this.getValueResponse(url_)
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        //this.headers = keys.map(key =>`${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.value_ = { ... resp.body };
        console.log('Value:',this.value_)
      });
  }

}
