// src/app/order.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenServicio {
  ordenes: any[] = [];
  pedido: any[] = [];
  totalesDia = 0;

  constructor() { }

  add(nombre: string, direccion: string, tel: string, tamanio: string, ingredientes: string, cantidad: number, subtotal: number,hoy:string) {
    const nuevaOrden = {
      nombre,
      direccion,
      tel,
      tamanio,
      ingredientes,
      cantidad,
      subtotal,
      hoy
    };
    this.ordenes.push(nuevaOrden);
  }
  terminarPedido() {
    const pedidoGuardado = JSON.parse(localStorage.getItem('pedido') || '[]');

    pedidoGuardado.push(...this.ordenes);

    localStorage.setItem('pedido', JSON.stringify(pedidoGuardado));

    this.ordenes = [];

    pedidoGuardado.forEach((orden: any) => {
      console.log(orden.nombre);
      console.log(orden.direccion);
    });

  }
  dameVentasDia(fechaVenta:string) {
    const pedidoGuardado = JSON.parse(localStorage.getItem('pedido') || '[]');

    
    const ventasPorNombre = pedidoGuardado.reduce((totales: any, orden: any) => {
      console.log(orden.hoy,fechaVenta);
      if (orden.hoy==fechaVenta) {      
      
      if (!totales[orden.nombre]) {
        totales[orden.nombre] = 0;
      }
      totales[orden.nombre] += orden.subtotal;
      this.totalesDia += orden.subtotal;
      return totales;
    }
    
    }, {});

    return ventasPorNombre;
  }
 

  quitarOrden(index: number) {
    this.ordenes.splice(index, 1);
  }

}