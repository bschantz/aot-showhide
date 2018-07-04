import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BREAKPOINT, FlexLayoutModule} from '@angular/flex-layout';
import {PRINT_BREAKPOINT} from './breakpoint';
import {TestComponent} from './test.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {PanelComponent} from './panel.component';
import {PrintShowHideDirective} from './printShowHide.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TestComponent,
    PanelComponent,
    PrintShowHideDirective,
  ],
  entryComponents: [
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    OverlayModule,
  ],
  providers: [
    {
      provide: BREAKPOINT,
      multi: true,
      useFactory: function customBreakpoint() {
        return [ PRINT_BREAKPOINT ];
      }
    }
  ]
})
export class AppModule { }
