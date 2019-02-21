import { TestBed } from '@angular/core/testing';

import { ResumenTransaccionService } from './resumen-transaccion.service';

describe('ResumenTransaccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumenTransaccionService = TestBed.get(ResumenTransaccionService);
    expect(service).toBeTruthy();
  });
});
