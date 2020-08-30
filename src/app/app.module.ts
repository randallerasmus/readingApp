import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoLetterWordsComponent } from './two-letter-words/two-letter-words.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoLetterWordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
