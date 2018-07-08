import { Component, OnInit, Input } from '@angular/core';
import {HtmlItemNew,QuizItemNew} from 'src/app/applist/Models/POCOnew.component';
import {ServiceCl} from 'src/app/applist/Services/services.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() _items:HtmlItemNew;
  @Input() _itemsObject:HtmlItemNew;

  constructor(){
    ServiceCl.log(["Constructor: " + this.constructor.name]);
  }

  ngOnInit(){
    ServiceCl.log(["Inited: " + this.constructor.name,this._items,this._itemsObject]);
  }

  typeName(i_:HtmlItemNew){
    if(i_!=null){
      return i_.getType();
    }
  }
  isQuizItem(i_:HtmlItemNew){
    if(i_ instanceof QuizItemNew){
      return true;
    }
  }
}
