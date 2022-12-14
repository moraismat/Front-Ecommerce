import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidorealizadoComponent } from './pedidorealizado.component';

describe('PedidorealizadoComponent', () => {
  let component: PedidorealizadoComponent;
  let fixture: ComponentFixture<PedidorealizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidorealizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidorealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
