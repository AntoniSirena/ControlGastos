import { TestBed } from '@angular/core/testing';

import { HistorialTransaccionAnuladaService } from './historial-transaccion-anulada.service';

describe('HistorialTransaccionAnuladaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialTransaccionAnuladaService = TestBed.get(HistorialTransaccionAnuladaService);
    expect(service).toBeTruthy();
  });
});
