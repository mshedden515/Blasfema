import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGraficaComponent } from './app-grafica.component';

describe('AppGraficaComponent', () => {
  let component: AppGraficaComponent;
  let fixture: ComponentFixture<AppGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
