import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndemicSpeciesComponent } from './endemic-species.component';

describe('EndemicSpeciesComponent', () => {
  let component: EndemicSpeciesComponent;
  let fixture: ComponentFixture<EndemicSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndemicSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndemicSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
