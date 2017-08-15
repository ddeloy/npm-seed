import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoGridComponent } from './wijmo-grid.component';

describe('WijmoGridComponent', () => {
  let component: WijmoGridComponent;
  let fixture: ComponentFixture<WijmoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijmoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijmoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
