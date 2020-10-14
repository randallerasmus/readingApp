import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {OneletterComponent} from './one-letter-words/oneletter.component';
import {TwoLetterWordsComponent} from './two-letter-words/two-letter-words.component';
import {RandomWordsComponent} from './random-words/random-words.component';
import {FourLetterComponent} from './four-letter-words/four-letter.component';
import {ThreeLetterComponent} from './three-letter-words/three-letter.component';
import {FullSentenceComponent} from './full-sentence/full-sentence.component';


const routes: Routes = [
  {path: '' , component: OneletterComponent},
  {path: 'one-letter' , component: OneletterComponent},
  {path: 'two-letter' , component: TwoLetterWordsComponent},
  {path: 'three-letter' , component: ThreeLetterComponent},
  {path: 'four-letter' , component: FourLetterComponent},
  {path: 'random-words' , component: RandomWordsComponent},
  {path: 'full-sentence' , component: FullSentenceComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
