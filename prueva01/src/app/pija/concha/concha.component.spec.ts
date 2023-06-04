import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConchaComponent } from './concha.component';

describe('ConchaComponent', () => {
  let component: ConchaComponent;
  let fixture: ComponentFixture<ConchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConchaComponent]
    });
    fixture = TestBed.createComponent(ConchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
