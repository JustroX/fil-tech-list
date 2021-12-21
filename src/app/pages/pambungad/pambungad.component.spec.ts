import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PambungadComponent } from './pambungad.component';

describe('PambungadComponent', () => {
  let component: PambungadComponent;
  let fixture: ComponentFixture<PambungadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PambungadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PambungadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
