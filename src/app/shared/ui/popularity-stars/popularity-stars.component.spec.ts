import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityStarsComponent } from './popularity-stars.component';

describe('PopularityStarsComponent', () => {
  let component: PopularityStarsComponent;
  let fixture: ComponentFixture<PopularityStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularityStarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularityStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
