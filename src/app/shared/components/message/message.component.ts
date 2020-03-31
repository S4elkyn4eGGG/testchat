import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IMessageConfig } from '../../models/components';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit {
  @Input() public config: IMessageConfig;
  @Input() public current: number;

  public get messageClass(): string {
    return `message_${this.config.id === this.current ? 'customer' : 'other'}`;
  }

  public get messageContCls(): string {
    return `message__container_${this.config.id === this.current ? 'customer' : 'other'}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
