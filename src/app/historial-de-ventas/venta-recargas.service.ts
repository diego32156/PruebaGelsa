import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaRecargasService {
  private apiUrl = 'http://localhost:8080/api/'; // Actualiza la URL con la ruta de tu backend

  constructor(private http: HttpClient) { }

  realizarVenta(cantidad: number, operador: string, vendedor: string): Observable<any> {
    const venta = { cantidad, operador, vendedor };
    return this.http.post<any>(this.apiUrl + 'realizar-venta', venta);
  }

  obtenerHistorialVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'historial-ventas');
  }
}
