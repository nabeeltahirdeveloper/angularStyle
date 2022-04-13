import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './pages/mail/mail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SidebarCtaComponent } from './components/sidebar-cta/sidebar-cta.component';
import { MainAddComponent } from './components/main-add/main-add.component';
import { MainMailComponent } from './components/main-mail/main-mail.component';
import { MainMailCtaComponent } from './components/main-mail-cta/main-mail-cta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [AppComponent, MailComponent, SidebarComponent, MainComponent, SidebarCtaComponent, MainAddComponent, MainMailComponent, MainMailCtaComponent, AddDialogComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatDialogModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
