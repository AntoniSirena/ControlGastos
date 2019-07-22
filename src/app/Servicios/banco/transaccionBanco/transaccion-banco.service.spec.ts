import { TestBed } from '@angular/core/testing';

import { TransaccionBancoService } from './transaccion-banco.service';

describe('TransaccionBancoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransaccionBancoService = TestBed.get(TransaccionBancoService);
    expect(service).toBeTruthy();
  });
});
