import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IMessageConfig } from '../../shared/models/components';
import { ChatService } from '../../core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  public get user(): string {
    // chatService$.user.name
    return `${'Jack Richer'}`;
  }

  public messages: IMessageConfig[] = this.chatService$.messages();

  constructor(private chatService$: ChatService) {}
}
