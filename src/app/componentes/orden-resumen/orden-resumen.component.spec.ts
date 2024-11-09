import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenResumenComponent } from './orden-resumen.component';

describe('OrdenResumenComponent', () => {
  let component: OrdenResumenComponent;
  let fixture: ComponentFixture<OrdenResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenResumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
