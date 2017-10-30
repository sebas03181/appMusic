import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListaComponent } from './new-lista.component';

describe('NewListaComponent', () => {
  let component: NewListaComponent;
  let fixture: ComponentFixture<NewListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
