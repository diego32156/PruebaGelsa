import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasRecargasComponent } from './ventas-recargas/ventas-recargas.component';
import { HistorialVentasComponent } from './historial-de-ventas/historial-de-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasRecargasComponent,
    HistorialVentasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
