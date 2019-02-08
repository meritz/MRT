import { TestBed } from '@angular/core/testing';

import { DedicasfirestoreService } from './dedicasfirestore.service';

describe('DedicasfirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DedicasfirestoreService = TestBed.get(DedicasfirestoreService);
    expect(service).toBeTruthy();
  });
});
