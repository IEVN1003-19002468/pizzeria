import { Component } from '@angular/core';
import { OrdenServicio } from '../../orden.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ventas-diarias',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ventas-diarias.component.html',
  styleUrl: './ventas-diarias.component.css'
})
export class VentasDiariasComponent {
  ventasPorNombre: { [nombre: string]: number } = {};
  formGroup !: FormGroup;
  cargando = false;
  constructor(public ordenServicio: OrdenServicio, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      fechaVenta: ['']
    });
  }

  ngOnInit(): void {
    this.formGroup = this.initForm();
    this.cargando = false;


  }

  initForm(): FormGroup {
    return this.fb.group({
      fechaVenta: [''],

    })
  }
  dameVentas() {
   
   
    this.simularTrabajoLargo();
    this.cargando=true;
   

  }
  simularTrabajoLargo(): void {
    setTimeout(() => {
      let { fechaVenta } = this.formGroup.value;
      this.ventasPorNombre = this.ordenServicio.dameVentasDia(fechaVenta);
      this.cargando = false;
    }, 1000); 
  }
}
