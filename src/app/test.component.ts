import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  styleUrls: [
    'test.component.css'
  ],
  template: `
    <div class="bounds">
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
export class TestComponent {}
