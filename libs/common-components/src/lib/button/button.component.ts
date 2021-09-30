import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-state-management-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter<unknown>();

  onBtnClick() {
    this.btnClick.emit();
  }
}
