/* tslint:disable:directive-selector */
import {Directive, ElementRef, Inject, Input, Optional, PLATFORM_ID, Self} from '@angular/core';
import {LayoutDirective, MediaMonitor, negativeOf, SERVER_TOKEN, ShowHideDirective, StyleUtils} from '@angular/flex-layout';

@Directive({
  selector: `[fxHide.print], [fxShow.print]`
})
export class PrintShowHideDirective extends ShowHideDirective {
  constructor(
    monitor: MediaMonitor,
    @Optional() @Self() layout: LayoutDirective,
    elRef: ElementRef,
    styleUtils: StyleUtils,
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject(SERVER_TOKEN) serverModuleLoaded: boolean
  ) {
    super(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded);
  }

  @Input('fxHide.print') set hidePrint(val) {
    this._cacheInput('showPrint', negativeOf(val));
  }

  @Input('fxShow.print') set showPrint(val) {
    this._cacheInput('showPrint', val);
  }
}
