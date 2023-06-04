import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpioComponent } from './limpio.component';

describe('LimpioComponent', () => {
  let component: LimpioComponent;
  let fixture: ComponentFixture<LimpioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpioComponent]
    });
    fixture = TestBed.createComponent(LimpioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
