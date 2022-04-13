import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { mailData } from 'src/app/mailData';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-main-add',
  templateUrl: './main-add.component.html',
  styleUrls: ['./main-add.component.css']
})
export class MainAddComponent implements OnInit {
  @Input() animal!:string
  mails!:mailData
    @Output() sendMail: EventEmitter<mailData>= new EventEmitter()
    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }
    addClick(){
      console.log("clicked")
      const ref=this.dialog.open(AddDialogComponent, {
      });
      ref.afterClosed().subscribe(res=>{
      console.log(res)
      this.mails=res
      this.sendMail.emit(this.mails)

    })
    
  }

}
