import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { nameInputComponent } from './nameInput/nameInput.component';


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
