import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeVentasComponent } from './historial-de-ventas.component';

describe('HistorialDeVentasComponent', () => {
  let component: HistorialDeVentasComponent;
  let fixture: ComponentFixture<HistorialDeVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialDeVentasComponent]
    });
    fixture = TestBed.createComponent(HistorialDeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
