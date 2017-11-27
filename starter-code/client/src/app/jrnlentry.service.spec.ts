import { TestBed, inject } from '@angular/core/testing';

import { JrnlentryService } from './jrnlentry.service';

describe('JrnlentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JrnlentryService]
    });
  });

  it('should be created', inject([JrnlentryService], (service: JrnlentryService) => {
    expect(service).toBeTruthy();
  }));
});
