import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCancionesComponent } from './buscar-canciones.component';

describe('BuscarCancionesComponent', () => {
  let component: BuscarCancionesComponent;
  let fixture: ComponentFixture<BuscarCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
