import { TestBed } from '@angular/core/testing';

import { MarcadoresRutasService } from './marcadores-rutas.service';

describe('MarcadoresRutasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcadoresRutasService = TestBed.get(MarcadoresRutasService);
    expect(service).toBeTruthy();
  });
});
