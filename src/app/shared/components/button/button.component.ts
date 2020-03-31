import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() public btnType;

  public get getType(): string {
    return this.btnType ? `button__${this.btnType}` : '';
  }

  constructor() {}

  ngOnInit(): void {}
}
