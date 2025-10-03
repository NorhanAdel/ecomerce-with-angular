import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfDay } from './deals-of-day';

describe('DealsOfDay', () => {
  let component: DealsOfDay;
  let fixture: ComponentFixture<DealsOfDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealsOfDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsOfDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
