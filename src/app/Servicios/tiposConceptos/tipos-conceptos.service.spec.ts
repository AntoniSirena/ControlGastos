import { TestBed } from '@angular/core/testing';

import { TiposConceptosService } from './tipos-conceptos.service';

describe('TiposConceptosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposConceptosService = TestBed.get(TiposConceptosService);
    expect(service).toBeTruthy();
  });
});
