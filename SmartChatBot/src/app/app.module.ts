import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [AppComponent, ChatDialogComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
