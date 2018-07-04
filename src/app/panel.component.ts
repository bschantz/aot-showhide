import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <mat-card fxShow fxHide.print>
      <div class="panel-content"><h2>Look Here</h2></div>
    </mat-card>
    `,
  styles: [
    `.panel-content {
        width: 300px;
        text-align: center;
    }`,
  ]
})
export class PanelComponent {

}
