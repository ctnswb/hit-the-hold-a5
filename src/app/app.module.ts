import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { countdownComponent } from './countdown/countdown.component';
import { holdComponent } from './holdList/hold/hold.component';
import { holdListComponent } from './holdList/holdList.component';
import { nameInputComponent } from './nameInput/nameInput.component';
import { scoreComponent } from './scoreList/score/score.component';
import { scoreListComponent } from './scoreList/scoreList.component';
import { timerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    countdownComponent,
    holdComponent,
    holdListComponent,
    nameInputComponent,
    scoreComponent,
    scoreListComponent,
    timerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
