import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroAtualizarComponent } from './genero-atualizar.component';

describe('GeneroAtualizarComponent', () => {
  let component: GeneroAtualizarComponent;
  let fixture: ComponentFixture<GeneroAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
