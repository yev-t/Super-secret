import { TestBed, inject } from '@angular/core/testing';

import { NewpetService } from './newpet.service';

describe('NewpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewpetService]
    });
  });

  it('should be created', inject([NewpetService], (service: NewpetService) => {
    expect(service).toBeTruthy();
  }));
});
