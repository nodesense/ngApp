import { TestBed, async, inject } from '@angular/core/testing';

import { SaveAlertGuard } from './save-alert.guard';

describe('SaveAlertGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveAlertGuard]
    });
  });

  it('should ...', inject([SaveAlertGuard], (guard: SaveAlertGuard) => {
    expect(guard).toBeTruthy();
  }));
});
