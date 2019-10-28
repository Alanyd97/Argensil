import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantesComponent } from './lubricantes.component';

describe('LubricantesComponent', () => {
  let component: LubricantesComponent;
  let fixture: ComponentFixture<LubricantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LubricantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
