import { Component, OnInit } from '@angular/core';
import { mailData } from 'src/app/mailData';
import { editMailType } from '../../editMailData';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allMails:mailData[]
  mailData!: mailData
  constructor(public dialog: MatDialog) {
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
  editMail(editMails:editMailType){
    console.log("get mails", editMails)
    const ref=this.dialog.open(AddDialogComponent, {
      data:editMails
    });
    ref.afterClosed().subscribe(res=>{
    console.log("this response",res)
  }
    )
  }
}

