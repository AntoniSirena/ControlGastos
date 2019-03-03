import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonesAnulacionTransaccionComponent } from './razones-anulacion-transaccion.component';

describe('RazonesAnulacionTransaccionComponent', () => {
  let component: RazonesAnulacionTransaccionComponent;
  let fixture: ComponentFixture<RazonesAnulacionTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazonesAnulacionTransaccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonesAnulacionTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
