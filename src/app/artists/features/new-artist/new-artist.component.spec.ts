import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArtistComponent } from './new-artist.component';

describe('NewArtistComponent', () => {
  let component: NewArtistComponent;
  let fixture: ComponentFixture<NewArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
