import { TestBed, inject } from '@angular/core/testing';

import { EditpetService } from './editpet.service';

describe('EditpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditpetService]
    });
  });

  it('should be created', inject([EditpetService], (service: EditpetService) => {
    expect(service).toBeTruthy();
  }));
});
