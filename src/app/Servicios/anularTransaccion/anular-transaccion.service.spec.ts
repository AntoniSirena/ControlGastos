import { TestBed } from '@angular/core/testing';

import { AnularTransaccionService } from './anular-transaccion.service';

describe('AnularTransaccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnularTransaccionService = TestBed.get(AnularTransaccionService);
    expect(service).toBeTruthy();
  });
});
