import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProductoComponent } from './link-producto.component';

describe('LinkProductoComponent', () => {
  let component: LinkProductoComponent;
  let fixture: ComponentFixture<LinkProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
