import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoLetterWordsComponent } from './two-letter-words/two-letter-words.component';
import { OneletterComponent } from './one-letter-words/oneletter.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ThreeLetterComponent } from './three-letter-words/three-letter.component';
import { FourLetterComponent } from './four-letter-words/four-letter.component';
import { RandomWordsComponent } from './random-words/random-words.component';
import { FullSentenceComponent } from './full-sentence/full-sentence.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    TwoLetterWordsComponent,
    OneletterComponent,
    HeaderComponent,
    ThreeLetterComponent,
    FourLetterComponent,
    RandomWordsComponent,
    FullSentenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
