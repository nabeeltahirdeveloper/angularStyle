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

@NgModule({
  declarations: [AppComponent, MailComponent, SidebarComponent, MainComponent, SidebarCtaComponent, MainAddComponent, MainMailComponent, MainMailCtaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
