import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdenResumenComponent } from './componentes/orden-resumen/orden-resumen.component';
import { OrdenComponent } from './componentes/orden/orden.component';
import { VentasDiariasComponent } from './componentes/ventas-diarias/ventas-diarias.component';
export interface Orden {
  tamanio: string;
  ingredientes: string[];
  cantidad: number;
  subtotal: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OrdenResumenComponent,OrdenComponent,VentasDiariasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
  orders: Orden[] = []; 

  
  onOrderAdded(newOrder: Orden) {
    this.orders.push(newOrder);
  }
}
