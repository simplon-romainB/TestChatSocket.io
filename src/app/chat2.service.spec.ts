/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Chat2Service } from './chat2.service';

describe('Chat2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chat2Service]
    });
  });

  it('should ...', inject([Chat2Service], (service: Chat2Service) => {
    expect(service).toBeTruthy();
  }));
});
