import { Component } from '@angular/core';
import { VentaRecargasService } from './venta-recargas.service';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-de-ventas.component.html',
  styleUrls: ['./historial-de-ventas.component.css']
})
export class HistorialVentasComponent {
  historial!: any[];

  constructor(private ventaRecargasService: VentaRecargasService) {
    this.obtenerHistorialVentas();
  }

  obtenerHistorialVentas() {
    this.ventaRecargasService.obtenerHistorialVentas()
      .subscribe(
        historial => {
          this.historial = historial;
          console.log('Historial de ventas obtenido:', historial);
        },
        error => {
          console.error('Error al obtener el historial de ventas:', error);
        }
      );
  }
}
