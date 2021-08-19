import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialItemComponent } from './tutorial-item.component';

describe('TutorialItemComponent', () => {
  let component: TutorialItemComponent;
  let fixture: ComponentFixture<TutorialItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
