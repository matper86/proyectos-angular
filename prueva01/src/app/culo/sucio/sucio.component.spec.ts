import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucioComponent } from './sucio.component';

describe('SucioComponent', () => {
  let component: SucioComponent;
  let fixture: ComponentFixture<SucioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucioComponent]
    });
    fixture = TestBed.createComponent(SucioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
