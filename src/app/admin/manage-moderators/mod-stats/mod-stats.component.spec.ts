import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModStatsComponent } from './mod-stats.component';

describe('ModStatsComponent', () => {
  let component: ModStatsComponent;
  let fixture: ComponentFixture<ModStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
