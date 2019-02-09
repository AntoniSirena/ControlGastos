import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransaccionAnuladaComponent } from './historial-transaccion-anulada.component';

describe('HistorialTransaccionAnuladaComponent', () => {
  let component: HistorialTransaccionAnuladaComponent;
  let fixture: ComponentFixture<HistorialTransaccionAnuladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialTransaccionAnuladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTransaccionAnuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
