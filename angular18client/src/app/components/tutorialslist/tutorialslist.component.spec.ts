import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialslistComponent } from './tutorialslist.component';

describe('TutorialslistComponent', () => {
  let component: TutorialslistComponent;
  let fixture: ComponentFixture<TutorialslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
