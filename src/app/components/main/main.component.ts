import { Component, OnInit } from '@angular/core';
import { mailData } from 'src/app/mailData';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allMails:mailData[]
  mailData!: mailData
  constructor() {
    this.allMails=[]
   }

  ngOnInit(): void {
  }
  sendMail(mailData: mailData){
    this.allMails.push(mailData)
    console.log("main",this.allMails)
  }

  mailDelete(index:number){
    console.log('index', index)
    this.allMails.splice(index, 1)
  }
}
