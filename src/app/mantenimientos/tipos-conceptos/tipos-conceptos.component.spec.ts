import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposConceptosComponent } from './tipos-conceptos.component';

describe('TiposConceptosComponent', () => {
  let component: TiposConceptosComponent;
  let fixture: ComponentFixture<TiposConceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposConceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
