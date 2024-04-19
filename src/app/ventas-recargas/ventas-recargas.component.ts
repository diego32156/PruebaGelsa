import { Component, OnInit } from '@angular/core';
import {VentaRecargasService} from './venta-recargas.service';

@Component({
  selector: 'app-ventas-recargas',
  templateUrl: './ventas-recargas.component.html',
  styleUrls: ['./ventas-recargas.component.css']
})
export class VentasRecargasComponent implements OnInit{
  
  cantidad!: number;
  operador!: string;
  vendedor!: string;

  constructor(private ventaRecargasService: VentaRecargasService) {}

  realizarVenta() {
    this.ventaRecargasService.realizarVenta(this.cantidad, this.operador, this.vendedor)
      .subscribe(
        respuesta => {
          console.log('Venta realizada con éxito:', respuesta);
          // Aquí puedes agregar lógica adicional, como actualizar el historial de ventas.
        },
        error => {
          console.error('Error al realizar la venta:', error);
        }
      );
  }

  ngOnInit(): void {
    this.realizarVenta();
  }
}
