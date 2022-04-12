import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mailData } from 'src/app/mailData';
import { editMailType } from "src/app/editMailData"
@Component({
  selector: 'app-main-mail',
  templateUrl: './main-mail.component.html',
  styleUrls: ['./main-mail.component.css']
})
export class MainMailComponent implements OnInit {
  @Input() mail!:mailData
  @Input() index:number=0
  @Output() deleteMail: EventEmitter<number> = new EventEmitter
  @Output() editMail: EventEmitter<editMailType> = new EventEmitter


  editMails!:editMailType
  constructor() { }

  ngOnInit(): void {
    console.log("data", this.mail)
  }
  deleteItem(index:number){
    this.deleteMail.emit(this.index)
  }
  editItem(mails:mailData, index:number){
    console.log(mails)
    console.log(index)
    this.editMails={
      mailsData:mails,
      index:index
    }

    this.editMail.emit(this.editMails)
  }
}
