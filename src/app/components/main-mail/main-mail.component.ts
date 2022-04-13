import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mailData } from 'src/app/mailData';
@Component({
  selector: 'app-main-mail',
  templateUrl: './main-mail.component.html',
  styleUrls: ['./main-mail.component.css']
})
export class MainMailComponent implements OnInit {
  @Input() mail!:mailData
  @Input() index:number=0
  @Output() deleteMail: EventEmitter<number> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    console.log("data", this.mail)
  }
  deleteItem(index:number){
    this.deleteMail.emit(this.index)
  }
}
