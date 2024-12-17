import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialdetailsComponent } from './tutorialdetails.component';

describe('TutorialdetailsComponent', () => {
  let component: TutorialdetailsComponent;
  let fixture: ComponentFixture<TutorialdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
