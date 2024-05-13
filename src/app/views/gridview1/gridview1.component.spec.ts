import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridview1Component } from './gridview1.component';

describe('Gridview1Component', () => {
  let component: Gridview1Component;
  let fixture: ComponentFixture<Gridview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridview1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gridview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
