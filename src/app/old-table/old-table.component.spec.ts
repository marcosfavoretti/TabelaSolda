import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTableComponent } from './old-table.component';

describe('OldTableComponent', () => {
  let component: OldTableComponent;
  let fixture: ComponentFixture<OldTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldTableComponent]
    });
    fixture = TestBed.createComponent(OldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
