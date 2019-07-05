import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorderHoverDirective } from './border-hover.directive';
import { MakeBlinkComponent } from './make-blink/make-blink.component';
import { NoMeanWordsPipe } from './no-mean-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderHoverDirective,
    MakeBlinkComponent,
    NoMeanWordsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
