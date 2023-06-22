import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePruevaComponent } from './componente-prueva.component';

describe('ComponentePruevaComponent', () => {
  let component: ComponentePruevaComponent;
  let fixture: ComponentFixture<ComponentePruevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePruevaComponent]
    });
    fixture = TestBed.createComponent(ComponentePruevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
