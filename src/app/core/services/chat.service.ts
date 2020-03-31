import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMessageConfig } from '../../shared/models/components';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  public messages(): IMessageConfig[] {
    return [
      {
        name: 'Jack Richer',
        message: 'first',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'second',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
      {
        name: 'Jack Richer',
        message: 'asfsafasf',
        id: 1,
      },
      {
        name: 'Kon Konskii',
        message: 'asfsafasf',
        id: 0,
      },
    ];
    // return this.http.get('rooms/7c8dbf29-e78d-4f21-8d1a-048bda091be8/messages');
  }
}
