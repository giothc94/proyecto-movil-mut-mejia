import { TestBed } from '@angular/core/testing';

import { TurismoService } from './turismo.service';

describe('TurismoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurismoService = TestBed.get(TurismoService);
    expect(service).toBeTruthy();
  });
});
