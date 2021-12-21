import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunidadComponent } from './komunidad.component';

describe('KomunidadComponent', () => {
  let component: KomunidadComponent;
  let fixture: ComponentFixture<KomunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
