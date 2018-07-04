import {Component, OnInit} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';

import {PanelComponent} from './panel.component';

@Component({
  selector: 'app-test',
  styleUrls: [
    'test.component.css'
  ],
  template: `
    <div class="bounds">
      <button mat-button (click)="open()">Open Panel</button>
      <div class="content"
           fxLayout="row"
           fxLayout.xs="column"
           fxFlexFill>

        <div fxFlex="15" class="sec1" fxFlex.xs="55">
          first-section
        </div>
        <div fxHide.print fxShow fxFlex="30" class="sec2">
          second-section
        </div>
        <div fxFlex="55" class="sec3" fxFlex.xs="15">
          third-section
        </div>

      </div>

    </div>
  `
})
export class TestComponent implements OnInit {
  formButtonXs = true;

  constructor(
    private overlay: Overlay,
  ) {
  }


  ngOnInit() {
  }

  open() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .top('400px')
    });
    const portal = new ComponentPortal(PanelComponent);
    overlayRef.attach<PanelComponent>(portal);
  }
}
