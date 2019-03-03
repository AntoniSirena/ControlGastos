import { TestBed } from '@angular/core/testing';

import { RazonesAnulacionTransaccionService } from './razones-anulacion-transaccion.service';

describe('RazonesAnulacionTransaccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazonesAnulacionTransaccionService = TestBed.get(RazonesAnulacionTransaccionService);
    expect(service).toBeTruthy();
  });
});
