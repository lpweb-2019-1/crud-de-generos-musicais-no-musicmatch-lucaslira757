import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroExcluirComponent } from './genero-excluir.component';

describe('GeneroExcluirComponent', () => {
  let component: GeneroExcluirComponent;
  let fixture: ComponentFixture<GeneroExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
