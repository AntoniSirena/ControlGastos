import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionBancoComponent } from './transaccion-banco.component';

describe('TransaccionBancoComponent', () => {
  let component: TransaccionBancoComponent;
  let fixture: ComponentFixture<TransaccionBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
