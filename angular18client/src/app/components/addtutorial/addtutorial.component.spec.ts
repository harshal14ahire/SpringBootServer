import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtutorialComponent } from './addtutorial.component';

describe('AddtutorialComponent', () => {
  let component: AddtutorialComponent;
  let fixture: ComponentFixture<AddtutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
