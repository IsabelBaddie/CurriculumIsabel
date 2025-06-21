import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacionesPage } from './aplicaciones.page';

describe('AplicacionesPage', () => {
  let component: AplicacionesPage;
  let fixture: ComponentFixture<AplicacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
