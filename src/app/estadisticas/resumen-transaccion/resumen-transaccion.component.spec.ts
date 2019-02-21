import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTransaccionComponent } from './resumen-transaccion.component';

describe('ResumenTransaccionComponent', () => {
  let component: ResumenTransaccionComponent;
  let fixture: ComponentFixture<ResumenTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenTransaccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
