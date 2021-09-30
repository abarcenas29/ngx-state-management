import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-state-management-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  @Input() cartCount = 0;
}
