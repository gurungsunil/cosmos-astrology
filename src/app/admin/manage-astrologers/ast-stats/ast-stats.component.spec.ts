import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstStatsComponent } from './ast-stats.component';

describe('AstStatsComponent', () => {
  let component: AstStatsComponent;
  let fixture: ComponentFixture<AstStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
