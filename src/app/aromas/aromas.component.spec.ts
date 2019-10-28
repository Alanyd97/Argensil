import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasComponent } from './aromas.component';

describe('AromasComponent', () => {
  let component: AromasComponent;
  let fixture: ComponentFixture<AromasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AromasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
