import { TestBed } from '@angular/core/testing';

import { PrieresfirestoreService } from './prieresfirestore.service';

describe('PrieresfirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrieresfirestoreService = TestBed.get(PrieresfirestoreService);
    expect(service).toBeTruthy();
  });
});
