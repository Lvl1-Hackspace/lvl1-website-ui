import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'lvl1-website-ui-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <lvl1-website-ui-analog-welcome/>
  `,
})
export default class HomeComponent {
}
