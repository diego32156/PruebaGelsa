import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasRecargasComponent } from './ventas-recargas/ventas-recargas.component';
import { HistorialVentasComponent } from './historial-de-ventas/historial-de-ventas.component';

const routes: Routes = [  
{
path: 'historial',
component: HistorialVentasComponent
},
{
path: 'ventas',
component:VentasRecargasComponent

},
{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
