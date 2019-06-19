import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroConsultarComponent } from './genero-consultar.component';

describe('GeneroConsultarComponent', () => {
  let component: GeneroConsultarComponent;
  let fixture: ComponentFixture<GeneroConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
