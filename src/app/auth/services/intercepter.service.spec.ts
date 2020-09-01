import { TestBed, inject } from '@angular/core/testing';

import { IntercepterService } from './intercepter.service';

describe('IntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntercepterService]
    });
  });

  it('should be created', inject([IntercepterService], (service: IntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
