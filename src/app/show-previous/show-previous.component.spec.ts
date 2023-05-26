import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreviousComponent } from './show-previous.component';

describe('ShowPreviousComponent', () => {
  let component: ShowPreviousComponent;
  let fixture: ComponentFixture<ShowPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPreviousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
