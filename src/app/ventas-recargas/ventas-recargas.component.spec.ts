import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasRecargasComponent } from './ventas-recargas.component';

describe('VentasRecargasComponent', () => {
  let component: VentasRecargasComponent;
  let fixture: ComponentFixture<VentasRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasRecargasComponent]
    });
    fixture = TestBed.createComponent(VentasRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
