import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BREAKPOINT, FlexLayoutModule} from '@angular/flex-layout';
import {PRINT_BREAKPOINT} from './breakpoint';
import {TestComponent} from './test.component';
import {PrintShowHideDirective} from './printShowHide.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TestComponent,
    PrintShowHideDirective,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: BREAKPOINT,
      multi: true,
      useFactory: () => [ PRINT_BREAKPOINT ],
    }
  ]
})
export class AppModule { }
